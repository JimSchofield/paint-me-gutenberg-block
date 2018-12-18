import React from "react";

function drawLine(ctx, p1, p2, color) {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawing: false,
            currentLineArray: []
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
        this.drawInProgressLine(ctx);
    }

    drawInProgressLine(ctx) {
        const line = this.state.currentLineArray;
        for (let i = 0; i < line.length - 1; i++) {
            drawLine(ctx, line[i], line[i + 1]);
        }
    }

    drawLines(ctx) {
        ctx.fillStyle = "black";

        this.props.linesList.forEach(line => {
            for (let i = 0; i < line.length - 1; i++) {
                drawLine(ctx, line[i], line[i + 1]);
            }
        });
    }

    startDrawing() {
        this.setState({
            isDrawing: true
        });
    }

    endDrawing() {
        const current = this.state.currentLineArray;

        this.setState(
            {
                isDrawing: false,
                currentLineArray: []
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
                currentLineArray: [...this.state.currentLineArray, point]
            });
        }
    }

    render() {
        const renderElements = this.props.viewMode ? (
            <canvas
                style={{ cursor: "crosshair" }}
                className="paintMe"
                ref="canvas"
                width="400"
                height="400"
            />
        ) : (
            <canvas
                style={{ cursor: "crosshair" }}
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
