import React from "react";


// // used before bezier curves were implemented for smooth lines
// function drawLine(ctx, p1, p2, color) {
//     if (color) {
//         ctx.strokeStyle = color;
//     }

//     ctx.beginPath();
//     ctx.moveTo(p1.x, p1.y);
//     ctx.lineTo(p2.x, p2.y);
//     ctx.stroke();
// }

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawing: false,
            inProgressLine: {
                color: "",
                points: []
            }
        };

        this.startDrawing = this.startDrawing.bind(this);
        this.endDrawing = this.endDrawing.bind(this);
        this.handleMove = this.handleMove.bind(this);
    }

    componentDidMount() {
        this.updateCanvas();

        // mouse up anywhere on screen should signal no more drawing
        !this.props.viewMode &&
            window.addEventListener("mouseup", this.endDrawing);
    }

    componentWillUnmount() {
        // clean up, clean up, everybody everywhere!
        !this.props.viewMode &&
            window.removeEventListener("mouseup", this.endDrawing);
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const width = this.refs.canvas.width;
        const height = this.refs.canvas.height;
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = this.props.backgroundColor;
        ctx.fillRect(0, 0, width, height);

        this.drawLines(ctx);
        if (this.state.inProgressLine.points.length > 1) {
            this.drawInProgressLine(ctx);
        }
    }

    drawInProgressLine(ctx) {
        const line = {
            color: this.props.lineColor,
            width: this.props.lineWidth,
            points: this.state.inProgressLine.points
        }
        this.drawBezierLine(ctx, line);
    }

    drawLines(ctx) {
        this.props.linesList.forEach(line => {
            this.drawBezierLine(ctx, line);
        });
    }

    drawBezierLine(ctx, line) {
        ctx.lineCap = 'round';
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;

        const { points } = line;

        let p1 = points[0];
        let p2 = points[1];

        // begin
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);

        for (let i = 1; i < points.length; i++) {
            //find midpoint
            const midpoint = {
                x: p1.x + (p2.x - p1.x) / 2,
                y: p1.y + (p2.y - p1.y) / 2
            };

            ctx.quadraticCurveTo(p1.x, p1.y, midpoint.x, midpoint.y);

            p1 = points[i];
            p2 = points[i + 1];
        }
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
    }

    startDrawing(event) {
        this.setState({
            isDrawing: true
        });
    }

    endDrawing() {
        const current = this.state.inProgressLine;

        if (current.points.length < 2) {
            this.setState({
                isDrawing: false
            });
            return;
        }

        this.setState(
            {
                isDrawing: false,
                inProgressLine: {
                    color: "",
                    points: []
                }
            },
            () => {
                this.props.onLineAdded(current);
            }
        );
    }

    handleMove(event) {
        if (this.state.isDrawing) {
            const domRect = event.target.getBoundingClientRect();
            const top = domRect.top;
            const left = domRect.left;
            const point = { x: event.pageX - left, y: event.pageY - top - 20 };

            this.setState({
                inProgressLine: {
                    color: this.props.lineColor,
                    width: this.props.lineWidth,
                    points: [...this.state.inProgressLine.points, point]
                }
            });
        }
    }

    render() {
        const renderElements = this.props.viewMode ? (
            <canvas
                style={{
                    boxShadow: "0 0 5px 0 rgba(0,0,0,.3)"
                }}
                className="paintMe"
                ref="canvas"
                width="400"
                height="400"
            />
        ) : (
            <canvas
                style={{ 
                    boxShadow: "0 0 5px 0 rgba(0,0,0,.3)",
                    cursor: "crosshair",
                }}
                className="paintMe"
                ref="canvas"
                width="400"
                height="400"
                onMouseDown={this.startDrawing}
                onMouseMove={this.handleMove}
            />
        );

        return <>{renderElements}</>;
    }
}
