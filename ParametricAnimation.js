var max_theta, num_points, angle, blue_up;

function setup()
{
   createCanvas(400, 400);
   frameRate(100);
   blue_up = false;
   max_theta = 0
   num_points = 250
}

function draw()
{
   var x, y, t, blue, green, radius;
   translate(200, 200);
   noStroke();
   background(255);
   blue = 255;
   green = 0;
   radius = 0;

   for (t = 0; t < max_theta; t += 4*PI/num_points)
   {
      x = 150*cos(.7*t)*cos(t);
      y = 150*cos(.7*t)*sin(t);

      fill(0, green, blue);
      ellipse(x, y, 10);

      // Adjust blue and green
      if (blue_up)
      {
         blue += 255/num_points;
         green -= 255/num_points; 
      } 
      else
      {
         blue -= 255/num_points;
         green += 255/num_points; 
      } 

      // Flip blue_up if a min or max is hit
      if (blue > 255 || blue < 0)
      {
         blue_up = !blue_up;
      }

   }
   max_theta += 4*PI/num_points;


   if (max_theta > 20*PI){
      noLoop();
   }

}