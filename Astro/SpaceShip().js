function SpaceShip() {
	
	this.x =  width/2;
	this.y = height/2;
	this.d = 25;
	this.currentAngle = 0;
	this.angle = 0;
	this.thrust = false;
	this.xAcc = 0;
	this.yAcc = 0;
  this.drag = 0.05;
  this.acceleration = 0.05;
  this.maxAcceleration = 5;
  this.xForce = 0;
  this.yForce = 0;

	
	this.render = function() {
    //Render the ship
		
		noFill();
		stroke(255);
		
		translate(this.x, this.y)
		
		rotate(this.currentAngle);
		
		triangle(-this.d, this.d, 
						 0, -(this.d + 10), 
						 this.d, this.d)
	
	}
	
	this.move = function() {
		
    //Way to reset my acceleratin to 0 - 83 is S
		if (keyIsDown(83)) {
			this.xAcc = 0;
			this.yAcc = 0;
		}
    
    //Reset Key - R
    if (keyIsDown(82)) {
			this.x = width/2;
			this.y = height/2;
      this.angle = 0
      this.currentAngle = 0
      this.xAcc = 0;
			this.yAcc = 0;
		}
		
    //When left is down angle is decreased by -5
		if (keyIsDown(LEFT_ARROW)) {
			this.currentAngle -= 5;
		}
		
    //When right is down angle is increased by 5
		if (keyIsDown(RIGHT_ARROW)) {
			this.currentAngle += 5;
		}
		
		if (keyIsDown(UP_ARROW)) {
			this.thrust = true;
		}else{
			this.thrust = false;
		}
		
		if (this.thrust){
      //When thrust is == true, increases the x and y acceleration of the ship
			this.xAcc = Math.min(this.xAcc += this.acceleration, this.maxAcceleration); //Math.min to limit the highest acceleratin to be 5
			this.yAcc = Math.min(this.yAcc += this.acceleration, this.maxAcceleration);
			this.angle = this.currentAngle; //Used so the ship can drift off in a direction, but if there is a diffrent firecting when you thrust it will go in that direction
		}else{
      //When the ship is not thrusting slowly slows the ship
			this.xAcc = Math.max(this.xAcc -= this.drag, 0); //Math.max to limit the lowest acceleratin to be 0
			this.yAcc = Math.max(this.yAcc -= this.drag, 0);
		}

    //Uses the ship current angle and break it into and x and a y force
    this.x += this.xAcc*sin(this.angle);
		this.y -= this.yAcc*cos(this.angle);
	}
}