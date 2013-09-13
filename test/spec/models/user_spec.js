define(['models/user'],function (User) {
    describe('The User Model', function () {
    	var attrs = ['first_name', 'last_name', 'age', 'gender', 'weight', 'bac', 'last_drank_at'],
            defaults = ['Joe', 'Smith', 21, 'male', 165, 0, null],
            user;
        
        beforeEach(function (){
        	user = new User();
        });
    });
});