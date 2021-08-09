/**
 * The Paint Worklet is a simple class that must provide a paint method. 
 * This is the action the worklet does.
 * Source code from: https://css-houdini.rocks/svg-in-css
 **/
class SvgUnderlinePaintWorklet {

    static get inputProperties() {
        return [
            '--svg-viewbox',
            '--svg-path',
            '--svg-fill',
            '--svg-stroke',
            '--svg-stroke-width'
        ];
    }

    paint(ctx, geom, properties) {
        let viewbox = String(properties.get('--svg-viewbox')).trim() || '0 0 100 100';
        viewbox = viewbox.split(' ').map(Number);

        let path = String(properties.get('--svg-path')).trim() || 'path("M0,0")';
        // get only SVG path values = everything between quotes
        let search = /['"`]([^'"`]+)/;
        path = path.match(search)[1].trim();

        let fill = String(properties.get('--svg-fill'));
        let stroke = String(properties.get('--svg-stroke'));
        let strokeWidth = String(properties.get('--svg-stroke-width'));

        // adapt viewbox to canvas
        ctx.scale(geom.width / viewbox[2], geom.height / viewbox[3]);
        ctx.translate(-viewbox[0], -viewbox[1]);

        let path2D = new Path2D(path);

        ctx.fillStyle = fill;
        ctx.fill(path2D);

        ctx.strokeStyle = stroke;
        ctx.lineWidth = strokeWidth;
        ctx.stroke(path2D);
    }
}

/**
 * Source: https://developers.google.com/web/updates/2018/01/paintapi
 */
class CheckerboardPainter {
    paint(ctx, geom, properties) {
        // Use `ctx` as if it was a normal canvas
        const colors = ['red', 'black'];
        const size = 64;
        for (let y = 0; y < geom.height / size; y++) {
            for (let x = 0; x < geom.width / size; x++) {
                const color = colors[(x + y) % colors.length];
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.rect(x * size, y * size, size, size);
                ctx.fill();
            }
        }
    }
}

// Register the paint worklets. This makes them available in CSS.
registerPaint('svg-underline', SvgUnderlinePaintWorklet);
registerPaint('checkerboard', CheckerboardPainter);
