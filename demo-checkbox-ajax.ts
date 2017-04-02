/// <reference path="bower_components/polymer-ts/polymer-ts.d.ts"/>

/**
 * TypeScript code for checkbox-ajax demo
 *
 * @author Alberto Piras
 */

@component('demo-checkbox-ajax')
class DemoCheckboxAjax extends polymer.Base {


    private selectedTasksArray: any;

    ready() {
        this.runTasks = this.runTasks.bind(this);

        console.log(this['is'], "ready!");
        var component = this;

    }

    created() {
    }

    attached() {

    }

    detached() {

    }

    @listen("runTasksButton.tap")
    runTasks() {

        this.selectedTasksArray = this.querySelectorAll("checkbox-ajax[checked]");
        if (this.selectedTasksArray.length) {

            console.log(this['is'] + " running tasks");
            //console.log("tasks selected: " + this.selectedTasksArray.length);
            this.selectedTasksArray.forEach(element => {
                console.log("task: " + element.value + " checked: " + element.checked);
                element.startAjax();
            });

        } else {
            console.log(this['is'] + " no tasks relected!");
        }

    }

}

DemoCheckboxAjax.register();
