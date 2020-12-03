var categories = [
    { id: "animals", parent: null },
    { id: "mammals", parent: "animals" },
    { id: "cats", parent: "mammals" },
    { id: "dogs", parent: "mammals" },
    { id: "chihuahua", parent: "dogs" },
    { id: "labrodor", parent: "dogs" },
    { id: "persian", parent: "cats" },
    { id: "siamese", parent: "cats" },
]


for (var i = 0; i < categories.length; i++) {
    if (categories[i].parent === null) {
        var nullObj = new Object();
    }
    if (categories[i].id === "animals" && categories[i].parent === null) {
        var animals = new Object();
        nullObj[`${categories[i].id}`] = animals;
    } else if (categories[i].id === "mammals" && categories[i].parent === "animals") {
        var mammals = new Object();
        animals[`${categories[i].id}`] = mammals;
    } else if (categories[i].id === "cats" && categories[i].parent === "mammals") {
        var cats = new Object();
        mammals[`${categories[i].id}`] = cats;
    } else if (categories[i].id === "dogs" && categories[i].parent === "mammals") {
        var dogs = new Object();
        mammals[`${categories[i].id}`] = dogs;
    } else if (categories[i].id === "chihuahua" && categories[i].parent === "dogs") {
        var chihuahua = new Object();
        dogs[`${categories[i].id}`] = chihuahua;
    } else if (categories[i].id === "labrodor" && categories[i].parent === "dogs") {
        var labrodor = new Object();
        dogs[`${categories[i].id}`] = labrodor;
    } else if (categories[i].id === "persian" && categories[i].parent === "cats") {
        var persian = new Object();
        cats[`${categories[i].id}`] = persian;
    } else if (categories[i].id === "siamese" && categories[i].parent === "cats") {
        var siamese = new Object();
        cats[`${categories[i].id}`] = siamese;
    } else {
        console.log("Error");
    }
}

document.write(JSON.stringify(nullObj));
console.log(nullObj)
