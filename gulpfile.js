var gulp = require("gulp"),
  watch = require("gulp-watch");

gulp.task("default", function() {
  console.log("Horay - you created a Gulp task");
});

gulp.task("html", function() {
  console.log("Imagen something useful being done to your HTML here");
});

gulp.task("styles", function() {
  console.log("Imagen Sass ot PostCSS task running here");
});

gulp.task("watch", function() {
  watch("./app/index.html", function() {
    gulp.start("html");
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("styles");
  });
});
