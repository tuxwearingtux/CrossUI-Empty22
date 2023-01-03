// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.ToolBar")
                .setHost(host,"xui_ui_toolbar8")
                .setItems([
                    {
                        "id" : "grp1",
                        "sub" : [
                            {
                                "id" : "a1",
                                "caption" : "button"
                            },
                            {
                                "id" : "a2",
                                "type" : "split"
                            },
                            {
                                "id" : "a3",
                                "caption" : "drop button",
                                "type" : "dropButton"
                            },
                            {
                                "id" : "a4",
                                "caption" : "status button",
                                "type" : "statusButton"
                            }
                        ],
                        "caption" : "grp1"
                    },
                    {
                        "id" : "grp2",
                        "sub" : [
                            {
                                "id" : "b1",
                                "imageClass" : "xui-icon-xui",
                                "caption" : ""
                            },
                            {
                                "id" : "b2",
                                "caption" : "go",
                                "label" : "label:",
                                "imageClass" : "xui-icon-xui"
                            }
                        ],
                        "caption" : "grp2"
                    }
                ])
                .setTop("1.5238095238095237em")
            );
            
            append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs5")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "imageClass" : "xui-icon-xui"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3"
                    },
                    {
                        "id" : "d",
                        "caption" : "page4",
                        "closeBtn" : true,
                        "optBtn" : "xui-uicmd-opt",
                        "popBtn" : true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a")
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div38")
                .setName("div")
                .setLeft("24.38095238095238em")
                .setTop("13.714285714285714em"),
                "a"
            );
            
            host.xui_ui_div38.append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element4")
                .setLeft("3.8095238095238093em")
                .setTop("5.333333333333333em")
            );
            
            host.xui_ui_div38.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div47")
                .setWidth("auto")
                .setPosition("relative")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setName("uinput")
                .setLeft("36.57142857142857em")
                .setTop("0em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Input")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button17")
                .setName("go")
                .setLeft("32em")
                .setTop("0em")
                .setCaption("Button")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "var",
                        "args" : [
                            "value",
                            "{args[3]}",
                            "{global.key}"
                        ],
                        "method" : "global",
                        "event" : 1
                    },
                    {
                        "desc" : "Action 2",
                        "type" : "control",
                        "target" : "xui_ui_div47",
                        "args" : [
                            {
                            },
                            {
                                "iframeAutoLoad" : "{global.value}"
                            }
                        ],
                        "method" : "setProperties"
                    },
                    {
                        "desc" : "Action 3",
                        "type" : "other",
                        "target" : "callback",
                        "args" : [
                            "{page.xui_ui_div47.render()}"
                        ],
                        "method" : "call"
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});