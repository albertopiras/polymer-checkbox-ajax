/// <reference path="bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('checkbox-ajax')
class CheckboxAjax extends polymer.Base {

  @property({ type: String, notify: true })
  url: string;

  @property({ type: String, notify: true })
  label: string;

  @property({ type: String, notify: true })
  checkclass: string;

@property({ type: String, notify: true })
  APIBody: string;

@property({ type: String, notify: true })
  APIMethod: string;

  @property({ type: String, notify: true })
  value: string;

  @property({ type: Boolean, notify: true })
  isLoading: boolean = false;

  @property({ type: Boolean, notify: true })
  isError: boolean = false;

  @property({ type: Boolean, notify: true })
  isSuccess: boolean = false;


  @property({
    type: Boolean,
    notify: true,
    reflectToAttribute: true
  })
  checked: boolean = false;

  @listen("checkboxAjax.change")
  funct(ev) {

    //console.log("changing checkbox state");
    this.checked = this.$.checkboxAjax.checked;

  }

  ready() {

    console.log(this['is'], "ready!");
    var component = this;

  }

  created() {
  }

  attached() {

  }

  detached() {

  }

  public startAjax() {
    console.log("start ajax for " + this.url);
    if(this.APIMethod){
      this.$.checkboxAjaxRequest.body = this.APIBody;
    }
    let ajaxRequest: any = this.$.checkboxAjaxRequest;
    
    ajaxRequest.generateRequest();
  }


  private startRequest(event) {
    this.isSuccess = false;
    this.isError = false;
    this.isLoading = true;
    console.log(this['is'] + "start request");
  }

  private parseResponse(event) {
    this.isSuccess = true;
    this.isLoading = false;
    console.log(this['is'] + "SUCCESS resonse.");
  }

  private parseError(event) {
    this.isLoading = false;
    this.isError = true;
    console.log(this['is'] + "Error running task");
  }

  public cleanAjax(){
    this.isSuccess = false;
    this.isError = false;
    this.isLoading = false;
  }

}

CheckboxAjax.register();
