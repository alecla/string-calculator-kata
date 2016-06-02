/*
string-calculator code kata:
instructions can be found here: http://osherove.com/tdd-kata-1/

The thought is to write some basic javascript, 
the main goal is to learn from other people, how they think! 
But also to do some TDD!

*/

function verify(s,i) {
     it("should evaluate '" + s + "' to " + i,function(){
        expect(calculator.add(s)).toEqual(i);
    });
}

describe("calculator",function(){
    verify("",0);
    verify("7",7);
    verify("7,4",11);
    verify("7,4,3,6",20);
    verify("7,4,3,\n6", 20);
    verify("//.\n1.5.7.8", 21);
    it("-2,4,6,-5", function(){
        expect(function(){calculator.add("-2,4,6,-5")}).toThrow(new Error("-2 -5"));
    });
});