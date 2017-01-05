const MINISTRY_PARTNERS = [
    {
        name: 'Blessings',
        address: '123 Street Road',
        city: 'Hudson',
        state: 'Ohio',
        zipCode: '44236',
        website: 'http://ccchapel.com',
        options: [
            {
                name: 'Graduation',
                details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
            },
            { 
                name: 'Annual Walk/Bike Event',
                details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
            },
            { 
                name: 'Other',
                details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
            },
        ]
    },
    {
        name: 'Broken Chains',
        address: '123 Street Road',
        city: 'Hudson',
        state: 'Ohio',
        zipCode: '44236',
        website: 'http://ccchapel.com',
        options: [
            {
                name: 'Visit Urbean Caf\u00e9',
                details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
            },
            { 
                name: 'Annual Walk/Bike Event',
                details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
            },
            { 
                name: 'Other',
                details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
            },
        ]
    },
    {
        name: 'Faithful Servants',
        address: '123 Street Road',
        city: 'Hudson',
        state: 'Ohio',
        zipCode: '44236',
        website: 'http://ccchapel.com',
        options: [
            {
                name: 'Visit a Faithful Servants Clinic',
                details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
            },
            { 
                name: 'Other',
                details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
            },
        ]
    },
];

/**
 * Converts from degrees to radians.
 * 
 * @degrees = degrees to convert to radians
 **/
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};
 
/**
 * Converts from radians to degrees.
 * 
 * @radians = radians to convert to degrees
 **/
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

/**
 * Finds a point on a circle
 * 
 * @cx = x coordinate of center of circle
 * @cy = y coordinate of the center of the circle
 * @r = radius of circle
 * @a = angle to find point at
 **/
Math.pointOnCircle = function(cx, cy, r, a) {
    return {
        x: cx + r * Math.cos(a),
        y: cy + r * Math.sin(a)
    }
};

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);