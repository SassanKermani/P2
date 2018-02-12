
let expect = require('chai').expect;
let request = require('request');

let url = 'http://www.dnd5eapi.co/api/monsters/';

describe('dnd 5e api call for the list of monsters', function(){

	let apiError;
	let apiResponse;
	let aipBody;

	before(function(done){
		request.get(url,(err, res, body)=>{
			apiError = err;
			apiResponse = res;
			apiBody = JSON.parse(body);
			done();
		});
	})

	/**
		TODO: Write this code
		DONE - not throw an err
		DONE - shoudl resond with 200
		- should have a count of 325
		- shuuld actuley hae all 325 spots
	 */
	
	 it('base should not have an err', function(){
	 	expect(apiError).to.not.be.true;
	 });

	 it('base should have a responce of 200', function(){
	 	expect(apiResponse.statusCode).to.eq(200);
	 });

	 it('base should have 325 in counts', function(){
	 	expect(apiBody.count).to.eq(325);
	 });

	 it('base should actule have 325 endpoitns', function(){
	 	expect(apiBody.results.length).to.eq(325);
	 });
});

// let endpoitns = ( Math.random() * Math.floor(325) ) + 1
// let otherUrl = url + endpoitns.toString();

// describe('dnd 5e api call', function(){

// 	let endpoitns = ( Math.random() * Math.floor(325) ) + 1
// 	let otherUrl = url + endpoitns.toString();

// 	let apiError;
// 	let apiResponse;
// 	let aipBody;

// 	before(function(done){
// 		request.get(otherUrl,(err, res, body)=>{
// 			apiError = err;
// 			apiResponse = res;
// 			apiBody = JSON.parse(body);
// 			done();
// 		});
// 	})

// 	/**
// 		TODO: Write this code
// 		- 
// 	 */

// 	it('monster endpoitn should not have an err', function(){
// 	 	expect(apiError).to.not.be.true;
// 	});

// 	it('monster endpoitn should have a responce of 200', function(){
// 	 	expect(apiResponse.statusCode).to.eq(200);
// 	});

// 	it('monster should have a name', function(){
// 	 	// expect(apiBody).should.have.property(name);
// 	 	expect(apiBody.name).to.exist;
// 	 });

// 	it('monster should have an hit dice', function(){
// 	 	// expect(apiBody).should.have.property(hit_dice);
// 	 	expect(apiBody.hit_dice).to.exist;
// 	 });

// });

let numberOfEndpoitns = 5;

for(let i = 0; i < numberOfEndpoitns; i++){


	describe(`dnd 5e api call for monster test number ${i + 1}`, function(){

		let endpoitns = Math.floor( (Math.random() * Math.floor(325)) + 1 );
		let otherUrl = url + endpoitns.toString();

		let apiError;
		let apiResponse;
		let aipBody;

		before(function(done){
			request.get(otherUrl,(err, res, body)=>{
				apiError = err;
				apiResponse = res;
				apiBody = JSON.parse(body);
				done();
			});
		})

		/**
			TODO: Write this code
			- 
		 */

		it(`end point hitting ${endpoitns}`, function(){
		 	expect(endpoitns).to.exist;
		});		

		it('monster endpoitn should not have an err', function(){
		 	expect(apiError).to.not.be.true;
		});

		it('monster endpoitn should have a responce of 200', function(){
		 	expect(apiResponse.statusCode).to.eq(200);
		});

		it('monster should have a name', function(){
		 	// expect(apiBody).should.have.property(name);
		 	expect(apiBody.name).to.exist;
		 });

		it('monster should have an hit dice', function(){
		 	// expect(apiBody).should.have.property(hit_dice);
		 	expect(apiBody.hit_dice).to.exist;
		 });

	});


}	//end of the for loop