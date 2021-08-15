/** 
 * Define custom property for stroke of svg underline as a color value to enable transition.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/CSS/RegisterProperty
 */
CSS.registerProperty({
    name: '--svg-stroke',
    syntax: '<color>',
    inherits: false,
    initialValue: 'red',
});
