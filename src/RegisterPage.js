
import React from 'react';
import RX from 'reactxp';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,label,Visible,Checkbox,lg,xs} from 'react-bootstrap';
/*const {
Welcome
} = TodoStyles;*/
const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#2a647d0a'
    }),
    policyIdTextBox:RX.Styles.createTextStyle({
        borderWidth:1,
        borderColor: 'rgb(8, 37, 103)',
     }),
    navcontainer: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#082567',
        height:50,
        padding:5
    }),
    Container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(213,222,219,0)',
        padding:5
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    instructions: RX.Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 16
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue',
        marginBottom: 16
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#ff0000ab',
        justifyContent: 'CENTER'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    editTodoItem: RX.Styles.createViewStyle({
        margin: 15,
        height: 47,
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 16,
        borderWidth: 2,
        bordercolor: '#cccccc'
    }),
    email: RX.Styles.createTextStyle({
        fontSize: 18,
        color: 'Black',
        justifyContent: 'center'
    }),
    password: RX.Styles.createTextStyle({
        fontSize: 18,
        color: 'Black',
        justifyContent: 'center'
    }),
    navrqlogo:RX.Styles.createViewStyle({
        height: 20,
        width:'30%',
         marginTop:'5',
         marginBottom:-20,
         marginRight:1200
    }),

    dropdown: RX.Styles.createTextStyle({
        fontSize: 14,
        color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 400,
        width: 354, 
        height: 35,
        borderRadius: 4,
        backgroundColor: '#ffffff',
    }),

    navwelcome: RX.Styles.createTextStyle({
        fontSize: 15,
        marginRight:1050,
        color: 'white',
        marginTop:'5'
    }),
    account: RX.Styles.createTextStyle({
        fontSize: 20,
        color: 'red',
    }),
    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        justifyContent:'center'

    }),
    flute: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        padding: 11,
        alignSelf:'center',
    }),
    head: RX.Styles.createScrollViewStyle({
        fontSize: 25,
        color: 'red',
        alignSelf:'center',
        textalign:'center',
        justifyContent: 'center',
     
    }),
    
    button1Text: RX.Styles.createTextStyle({
        fontSize: 14,
        color: 'white',
        justifyContent: 'center',
        textAlign:'CENTER',
        alignSelf:'center',
       
    }),
   
    button1: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth:1,
        width:130,
       height:5,
        marginLeft: 580,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
    }),
        logo:RX.Styles.createButtonStyle({
          width: 25,
          marginTop: -30,
          float:'right',
          alignItems:'right'

    }),
    register: RX.Styles.createImageStyle({
        height: 80,
        width: 110,
        justifyContent: 'center'
    }),
    InputSelectorCopy:RX.Styles.createTextStyle({
        fontSize: 14,
        color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 400,
        width: 354, 
        height: 35,
        // borderRadius: 4,
        backgroundColor: '#ffffff',
      
    }),

    AddressSelectorCopy:RX.Styles.createTextStyle({
        fontSize: 14,
        color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 400,
        width: 354, 
        height: 85,
        // borderRadius: 4,
        backgroundColor: '#ffffff',
      
    }),
    DateSelectorCopy:RX.Styles.createTextStyle({
        fontSize: 14,
        color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 400,
        width: 134, 
        height: 35,
        // borderRadius: 4,
        backgroundColor: '#ffffff',
      
    }),
    StartDate:RX.Styles.createTextStyle({
        fontSize: 14,
        // color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 400,
        width: 134, 
        height: 35,
        // borderRadius: 4,
        // backgroundColor: '#ffffff',
      
    }),
    
    Date1SelectorCopy:RX.Styles.createTextStyle({
        fontSize: 14,
        color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 80,
        width: 134, 
        height: 35,
        // borderRadius: 4,
        backgroundColor: '#ffffff',
      
    }),
    EndDate:RX.Styles.createTextStyle({
        fontSize: 14,
        // color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 80,
        width: 134, 
        height: 35,
        // borderRadius: 4,
        // backgroundColor: '#ffffff',
      
    }),

    sideText:RX.Styles.createTextStyle({
        width: 434,
 height: 32,
marginLeft:400
    }),
    sideMar:RX.Styles.createTextStyle({
        marginTop: 10,
        marginLeft:30,
        marginRight:20
    }),
   
};

    
 
//   alert("Verify otp");
//     window.location = "otp.html";
           

export default class RegisterPage extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
            todofield: '',
            secureTextEntry: true
        };
        this._translationValue = RX.Animated.createValue(-100);
        this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });
    }
    onChangeregister = () => {
        console.log("arjun")
        return fetch('http://localhost:8082/registerUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },

            body: JSON.stringify({
                "companyname": this.state.companyname,
                "companyid": this.state.companyid,
                "email": this.state.email,
                "providername": this.state.providername,
                "pass": this.state.pass,
                "repass": this.state.repass,
                "address": this.state.address,
                
                
            }
            ),
        }).then((result) => result.json()).then((result) => {
            var res = result
            // var data = responseJson.result.docs[0].Records.submitID
             console.log("arjun------------>", res);
            // console.log("logesh------------>", data);
            // var val = "SubmitId: " + res 


            swal("Your Submit ID:", res);

            // var resJson1 = JSON.stringify(res)
            // console.log(resJson1)
        })
    }
    onChangecompanyname = (value) => {
        this.setState({ companyname: value });

        console.log(this.state.companyname, "companyname");
    }
    onChangecompanyid = (value) => {
        this.setState({ companyid: value });

        console.log(this.state.companyid, "companyid");
    }
    onChangeemail = (value) => {
        this.setState({ email: value });

        console.log(this.state.email, "email");
    }
    onChangeprovidername = (value) => {
        this.setState({ providername: value });

        console.log(this.state.providername, "providername");
    }
   
    onChangepass = (value) => {
        this.setState({ pass: value });

        console.log(this.state.pass, "pass");
    }
    onChangerepass = (value) => {
        this.setState({ repass: value });

        console.log(this.state.repass, "repass");
    }
    onChangeaddress = (value) => {
        this.setState({ address: value });

        console.log(this.state.address, "address");
    }
    componentDidMount() {
        
    }
    

    render() {
        return (
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.navcontainer }>
                <RX.Image source={ './src/img/rqlogo.png' } style={ [styles.navrqlogo] } />
                    <RX.Text style={ styles.navwelcome }>
                        RAPID SETTLE
                    </RX.Text>
                </RX.View>
                <RX.View style={ styles.pageAlign }>
                    <RX.View style={ styles.flute }>
                        <RX.Text style={ styles.head }>
                            {/* Please Create An Account */}
                        </RX.Text>
                    </RX.View>
                </RX.View>
                
                <div class="container">
                <form>
                {/* <select class="form-control form-control-lg" id="lgFormGroupInput" style={styles.dropdown}>
                <option value="volvo">Relationship Manager</option>
                <option value="saab">Current provider</option> 
                </select> */}
                <div class="form-group row">
                
                <label for="lgFormGroupInput" style={styles.policyId}  class="col-sm-2 col-form-label col-form-label-lg">Company Name</label>
                
                <div class="col-sm-10">
                <RX.TextInput type="email"  style={styles.policyIdTextBox}  value={this.state.companyname} onChangeText={this.onChangecompanyname} id="lgFormGroupInput" placeholder=""/>
      </div>
    </div>
    </form>
    <form>
    <div class="form-group row">
      <label for="lgFormGroupInput"  style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Company Registered Id</label>
      <div class="col-sm-10">
      <RX.TextInput type="email"  style={styles.policyIdTextBox}  value={this.state.companyid} onChangeText={this.onChangecompanyid} id="lgFormGroupInput" placeholder=""/>
      </div>
    </div>
    </form>
    <form>
    <div class="form-group row">
      <label for="lgFormGroupInput"  style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Email Id</label>
      <div class="col-sm-10">
      <RX.TextInput type="email"  style={styles.policyIdTextBox}  value={this.state.email} onChangeText={this.onChangeemail} id="lgFormGroupInput" placeholder=""/>
      </div>
    </div>
    </form>
    {/* <form>
    <div class="form-group row">
      <label for="lgFormGroupInput"  style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Address</label>
      <div class="col-sm-10">
        <input type="email"  style={styles.InputSelectorCopy}  id="lgFormGroupInput" placeholder=""/>
      </div>
    </div>
    </form> */}
    <form>
    <div class="form-group row">
      <label for="lgFormGroupInput"  style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Provider Name</label>
      <div class="col-sm-10">
      <RX.TextInput type="email"  style={styles.policyIdTextBox}  value={this.state.providername} onChangeText={this.onChangeprovidername} id="lgFormGroupInput" placeholder=""/>
       
      </div>
    </div>
    </form>
    {/* <form>
    <div class="form-group row">
      <label for="lgFormGroupInput"  style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Contract Date</label>
      
      <div class="col-sm-10">
      <label for="lgFormGroupInput"  style={styles.StartDate}  class="col-sm-2 col-form-label col-form-label-lg" id="lgFormGroupInput">Start Date</label>
      <label for="lgFormGroupInput"  style={styles.EndDate}  class="col-sm-2 col-form-label col-form-label-lg" id="lgFormGroupInput">End Date</label>
      <input type="date" style={styles.DateSelectorCopy}  id="lgFormGroupInput" ></input>
      <input type="date" style={styles.Date1SelectorCopy}  id="lgFormGroupInput" ></input>
                                            
      </div>
    </div>
    </form> */}
    <form>
    <div class="form-group row">
      <label for="lgFormGroupInput"  style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Password</label>
      <div class="col-sm-10">
      <RX.TextInput type="password"  style={styles.policyIdTextBox}  value={this.state.pass} onChangeText={this.onChangepass} id="lgFormGroupInput" placeholder=""/>
      </div>
    </div>
    </form>
    <form>
    <div class="form-group row">
      <label for="lgFormGroupInput"  style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Confirm password</label>
      <div class="col-sm-10">
      <RX.TextInput type="password"  style={styles.policyIdTextBox}  value={this.state.repass} onChangeText={this.onChangerepass} id="lgFormGroupInput" placeholder=""/>
      </div>
    </div>
    </form>
    <form>
    <div class="form-group row">
      <label for="lgFormGroupInput"  style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Address</label>
      <div class="col-sm-10">
      <RX.TextInput type="email"  style={styles.policyIdTextBox}  value={this.state.address} onChangeText={this.onChangeaddress} id="lgFormGroupInput" placeholder=""/>
        
      </div>
    </div>
    </form>
   

            </div>
            
            <RX.Button
                    style={ [styles.button1] }
                   
                    onPress={() => this.onChangeregister()}
                >

                
                    <RX.Text style={ [styles.button1Text] }>
                        { 'Next' }
                    </RX.Text>
                </RX.Button>
                {/* <div class="form-group " style="margin-top:40px">
                                <button type="button" id="button"  class="btn btn-primary btn-lg btn-block login-button">Submit </button>
						</div> */}
               
            </RX.ScrollView>  
                
        );
     
    }
}
