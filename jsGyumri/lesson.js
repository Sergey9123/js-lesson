// Javascript is copilation language (W8)
// Ecmascript is instruction for js how to write correctly
// 1 operacian have a many exspression example ` let hello = 1 + (10 * 10 );
// When we create new variable in our computer RAM(memory) crate a box whose name is n example ` let  n = 120; 
// and in this box we can put VALUE (stexcvuma Rami mej box mejy drvuma arjeq )
// let n = {}; Computer in Ram create new box in box it put ADRESS ONLY NOT value 
// (Object chi pahvum arjeqov ayl hxumov boxi mej hxuma depi Object hishoxutyan mej) DRA HAMAR ERBEQ ERBEQ 
// 2 OBJECT KAM HASCE CHENQ KARA === ANENQ VOROVHETEV TARBER HASCENERA 
// js have 2 types ` Primitive and Object
// Primitive there is ` String("some text"),Number(10),Undefind,Null,boolean(true or false),symbol
// All primitives are busy because what new create in js will be Object : Inch avelanuma js mej darnuma Object 
//we heve only 6 primitives all that is Object
// typeof 45 "Number" ,typeof "text" "String" ,typeof "true" "Boolean" typeof undefind "undefind",
// typeof null "Object" its bag js, typeof function "function" but it is object(function podtipa Object),

// function hello (){
//     return 1;
// }
//  let num = hello();

// hello popoxakana vory pahuma hxum ira mej erb vor kanchumenq hello() Rami mejic ADRESS gnum kataruma function 
// u hello() mej linuma 1 el inqy hxum chi u menq iran veragrumenq let num vory darnuma hxum depi  1 

//    function hello (){
        
//      }
// hello popoxakana vory pahuma hxum ira mej erb vor kanchumenq hello() Rami mejic ADRESS gnum kataruma function 
//   u hello() mej linuma undifind el inqy hxum chi u menq iran veragrumenq let num vory darnuma hxum depi undifind
// u karam num() kanchem vortev inqy vonc hello() hxuma ete 2 hxuma uremn karam num()kanchem
// bayc kanchic heto klini EROR vortev darnuma kanchumem undefind()
// function takic Objecta ete grenq consolum CONSOLE.DIR ktenanq vor inqy takic ashxatuma object
 
                            // Terninary ?
// Ternarnir Operator ? (unenuma 3 masnakic) let n = (4>3) ? 2:1 ; 1 masnakicy da (4>3) sa paymana nshanakuma 
// ete paymany katarvuma amboxj artahaytutyuny darnuma 2 ete chi katarvum darnuma 1   let n = 2; 

                // FOR While 
// For petqa vor hertov franq amen andami vrayov 
// For in Objectneri hamar 
// For of Array hamar

       // NaN 
// NaN (Not a Number) typeof Number let x = hell0 / 2 : X DARNUMA NaN
//Nan !== Nan senc karanq voroshenq Nana te che bayc 100% VOROSHELU HAMAR OGTAGORCEL NUMBER.ISNAN()
// ete 100% uzumem chstem indz uxarkvac fayly NaN kam -0 stugumenq Object.is(-0,-0) kta true
// Object.is takic ashxatuma vorpes 4 havasar kareliya asac


                // Function Constructor
// ka grelu literal(baraci dzev) ev karanq grenq function constructori mijocov  
// new Array() => function constructor vory het kta nor zangvac vory OBJECTA 
// new bary sarquma nor isk uxaki String () uxaki poxuma exacy
// Native code - bazoviy function vory grvela lezun stexceluc

                   // TYPEOF tiperi popoxutyun kam    COERCION
//  es sax darnumen false kam true 

// Falsy           and      Truthy 
// 0,-0                    Mnacac sax true darnum
// undefind,null,            {}[] 
// Nan,False,""             function(){}



                     // Corcion or Converstation ( 2 tiperi havasarecnely irar ev hamemately)
// toString() => kanchuma taic ToString mecatar(takic ashaxtox method vor sarquma tox) u poqratar(sa functione) tarber baneren     
//toString() => ToString vory sarquma tiv ete toString("") == 0 bayc toSting("text") == NaN
//toboolean()=> ToBoolean bayc es metody tarbervuma verevi 2ic inqy chi sarum true false arjeqy ayl nayuma
// meji gracy true  te false u veradarcnuma meji poxancaci arjeqy ete true kam false
// Object menak darnuma Primitivi tipi aysinq  menak toString kam toNumber orinak` toString(Object)=>ToString => 
//toPrimitive(string) u darcnuma toxayin toPrimitive unenuma 3 tipi namyokner` "string","number","default"
// Object inqna voroshum inqy inch darna orinak` {} + number es depqum namyoky klini default 
// defaulty chigiti inqy Number te String asuma Objectin du voroshir 


                    // Native Code and Object Object
// erb grvuma Native Code uremn et zavadskoy coda grvac js koxmic orinak` console mej grenq toString kberi Native code
// erb kanchumenq inhc vor fnction vory chuni cnoxy w8 mana galis window mej u yndexicberuma gruma Object Object


let hello = {name:"Maria"};
console.log(String(hello));
