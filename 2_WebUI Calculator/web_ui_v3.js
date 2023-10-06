let WebUI = {}

WebUI.WidgetTypes = {
    UNDEFINED:      "undefind",
    TEXT:           "text",
    IMAGE:          "image",
    PUSH_BUTTON:    "push_button",
    TEXT_FIELD:     "text_field",
    SWITCH:         "switch",
    
    // ADD NEW WIDGET TYPES HERE
    CONTAINER:      "container",
    ROW:            "row",
    COLUMN:         "column",
    CALC_BUTTON:    "calc_button",
    CHANGE_BUTTON:  "change_button"
};

WebUI.Alignment = {
    // ADD ALIGNMENT TYPES HERE
    CENTER:         "center",
    LEFT:           "left",
    RIGHT:          "right",
    TOP:            "top",
    BOTTOM:         "bottom"
};

WebUI.widgets = [];
WebUI.focused_widget = null;
WebUI.dragged_widget = null;
WebUI.hovered_widget = null;

WebUI.is_mouse_dragging = false;       
WebUI.mouse_drag_start = {x:0, y:0};
WebUI.mouse_drag_prev = {x:0, y:0};

WebUI.app = null;

WebUI.parser = math.parser();
var final_input = "";
var previous_input = "";
var previous_result = "";
var previous_result1 = "";
var previous_result2 = "";
var previous_result3 = "";
var previous_result4 = "";
var previous_result5 = "";
var previous_result6 = "";

WebUI.initialize = function() {
    this.canvas = new fabric.Canvas("c", {
        backgroundColor: "white",
        hoverCursor: "default",
        selection: false,
        width: 2000,
        height: 580
    });

    //
    $(document).keypress(function(event) {
        WebUI.handleKeyPress(event);
    });
    $(document).mousedown(function(event) {
        let p = {x: event.pageX, y: event.pageY};
        WebUI.handleMouseDown(p);
    });
    $(document).mouseup(function(event) {
        let p = {x: event.pageX, y: event.pageY};
        WebUI.handleMouseUp(p);
    });
    $(document).mousemove(function(event) {
        let p = {x: event.pageX, y: event.pageY};
        WebUI.handleMouseMove(p);
    });

    //
    WebUI.initWidgets();
    WebUI.initVisualItems();
    WebUI.layoutWhenResourceReady();
}

WebUI.initWidgets = function() {
    // INITIALIZE WIDGETS HERE
    WebUI.calc_result = new WebUI.Text(final_input, 30, "black")
    WebUI.previous_input = new WebUI.Text(previous_input, 30, "black")
    WebUI.previous_result = new WebUI.Text(previous_result, 25, "black")
    WebUI.previous_result1 = new WebUI.Text(previous_result1, 30, "black")
    WebUI.previous_result2 = new WebUI.Text(previous_result2, 30, "black")
    WebUI.previous_result3 = new WebUI.Text(previous_result3, 30, "black")
    WebUI.previous_result4 = new WebUI.Text(previous_result4, 30, "black")
    WebUI.previous_result5 = new WebUI.Text(previous_result5, 30, "black")
    WebUI.previous_result6 = new WebUI.Text(previous_result6, 30, "black")
    WebUI.previous_text = new WebUI.Text("Previous Result", 30, "black")
    WebUI.current_formula = new WebUI.Text("Current Formula", 30, "black")
    if (Calcmode == "Scientific")
    {

        WebUI.app = new WebUI.Row({
            children: [
    
                
                new WebUI.Container({
                    desired_size: {width: 1000, height: 60},
                    horizontal_alignment: WebUI.Alignment.CENTER,
                    vertical_alignment: WebUI.Alignment.CENTER,
                    children: [ new WebUI.Text("WebUI Scientific Calculator", 40, "#194EA3") ],
                }),

                
                
                new WebUI.Column({
                    children:[
    
                        new WebUI.Row({
                            children:[

                                new WebUI.Container({
                                    desired_size: {width: 100, height: 60},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children:[]
                                }),
                                new WebUI.Column({
                                    children:[
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 580, height: 60},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children: [ new WebUI.Resultbox("", {width: 580, height: 50}),
                                                WebUI.calc_result]
                                        }),
                                        

                                    ]
                                }),
                                
    
                                new WebUI.Column({
                                    children: [
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("(", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton(")", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("+", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("-", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("/", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("%", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                    
                    
                    
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("<", {width: 50, height: 50}, "#E4A2D3")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton(">", {width: 50, height: 50}, "#E4A2D3")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("<=", {width: 50, height: 50}, "#E4A2D3")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton(">=", {width: 50, height: 50}, "#E4A2D3")],
                                        }),
                    
                                    ]
                                }),
                    
                                new WebUI.Column({
                                    children:[
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("{", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("}", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("7", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("8", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("9", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("*", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("sin", {width: 50, height: 50}, "#48B8EF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("cos", {width: 50, height: 50}, "#48B8EF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("tan", {width: 50, height: 50}, "#48B8EF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("==", {width: 50, height: 50}, "#E4A2D3")],
                                        }),
                    
                                        
                    
                                    ]
                                }),
                                new WebUI.Column({
                                    children:[
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("[", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("]", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("4", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("5", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("6", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("^", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("asin", {width: 50, height: 50}, "#48B8EF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("acos", {width: 50, height: 50}, "#48B8EF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("atan", {width: 50, height: 50}, "#48B8EF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("!=", {width: 50, height: 50}, "#E4A2D3")],
                                        }),
                    
                                        
                    
                                    ]
                                }),
                    
                                new WebUI.Column({
                                    children:[
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton(":", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton(";", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("1", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("2", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("3", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("◀", {width: 50, height: 50}, "#DCF25C")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("log", {width: 50, height: 50}, "#48B8EF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("sqrt", {width: 50, height: 50}, "#48B8EF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("e", {width: 50, height: 50}, "#F7A021")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("pi", {width: 50, height: 50}, "#F7A021")],
                                        }),
                    
                                        
                    
                                    ]
                                }),
                    
                    
                                new WebUI.Column({
                                    children:[
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton(",", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("=", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton(".", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("0", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("CL", {width: 50, height: 50}, "#EF4B4B")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("EV", {width: 50, height: 50}, "#5AF28C")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("!", {width: 50, height: 50}, "#48B8EF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("exp", {width: 50, height: 50}, "#48B8EF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("cross", {width: 50, height: 50}, "#48B8EF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("det", {width: 50, height: 50}, "#48B8EF")],
                                        }),
                    
                                        
                                    ]
                                }),
                                new WebUI.Column({
                                    children:[
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("w", {width: 50, height: 50}, "#F79A9A")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("x", {width: 50, height: 50}, "#F79A9A")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("y", {width: 50, height: 50}, "#F79A9A")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("z", {width: 50, height: 50}, "#F79A9A")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("f", {width: 50, height: 50}, "#47ADAD")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("g", {width: 50, height: 50}, "#47ADAD")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("A/C", {width: 50, height: 50}, "#6272ED")],
                                        }),
                                    
                                        new WebUI.Container({
                                            desired_size: {width: 120, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.ChangeButton("Simple ver.", {width: 120, height: 50}, "#E63EF9")],
                                        }),

                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children: [ new WebUI.GraphPlot("Graph", {width: 50, height: 50})
                                                ]
                                        }),
                                    ]
                                })
                            ]
                        }),
                        new WebUI.Row({
                            children:[
                                new WebUI.Container({
                                    desired_size: {width: 350, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("", {width: 500, height: 50}),WebUI.previous_result6
                                        ]
                                }),
                                new WebUI.Container({
                                    desired_size: {width: 500, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("", {width: 500, height: 50}),WebUI.previous_result5
                                        ]
                                }),
                                new WebUI.Container({
                                    desired_size: {width: 500, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("", {width: 500, height: 50}),WebUI.previous_result4
                                        ]
                                }),
                                new WebUI.Container({
                                    desired_size: {width: 500, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("", {width: 500, height: 50}),WebUI.previous_result3
                                        ]
                                }),
                                new WebUI.Container({
                                    desired_size: {width: 500, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("", {width: 500, height: 50}),WebUI.previous_result2
                                       ]
                                }),
                                new WebUI.Container({
                                    desired_size: {width: 500, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("", {width: 500, height: 50}),WebUI.previous_result1
                                        ]
                                }),
                                new WebUI.Container({
                                    desired_size: {width: 500, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("↑ Previous Result ↑", {width: 500, height: 50}),
                                        ]
                                }),
                                
                            ]
                        })
    
                    ]
                }),
    
    
    
            ]
    
        })
    }



    else{

        WebUI.app = new WebUI.Row({
            children: [
    
                
                new WebUI.Container({
                    desired_size: {width: 550, height: 60},
                    horizontal_alignment: WebUI.Alignment.CENTER,
                    vertical_alignment: WebUI.Alignment.CENTER,
                    children: [ new WebUI.Text("WebUI Simple Calculator", 40, "#194EA3") ],
                }),

                
                
                new WebUI.Column({
                    children:[
    
                        new WebUI.Row({
                            children:[

                                new WebUI.Container({
                                    desired_size: {width: 100, height: 60},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children:[]
                                }),
                                new WebUI.Column({
                                    children:[
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 230, height: 60},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children: [ new WebUI.Resultbox("", {width: 230, height: 50}),
                                                WebUI.calc_result]
                                        }),
                                       

                                    ]
                                }),
                                
    
                                new WebUI.Column({
                                    children: [
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("+", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("-", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("/", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("%", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                    
                                    ]
                                }),
                    
                                new WebUI.Column({
                                    children:[
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("7", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("8", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("9", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("*", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                    
                                        
                    
                                    ]
                                }),
                                new WebUI.Column({
                                    children:[
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("4", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("5", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("6", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("^", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                    
                                        
                    
                                    ]
                                }),
                    
                                new WebUI.Column({
                                    children:[
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("1", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("2", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("3", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("◀", {width: 50, height: 50}, "#DCF25C")],
                                        }),
                    
                                        
                    
                                    ]
                                }),
                    
                    
                                new WebUI.Column({
                                    children:[
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton(".", {width: 50, height: 50}, "#B0B0B0")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("0", {width: 50, height: 50}, "#DFDFDF")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("CL", {width: 50, height: 50}, "#EF4B4B")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 50, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("EV", {width: 50, height: 50}, "#5AF28C")],
                                        }),
                                        
                                       
                    
                                        
                                    ]
                                }),
                                new WebUI.Column({
                                    children:[
                                        new WebUI.Container({
                                            desired_size: {width: 100, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            vertical_alignment: WebUI.Alignment.CENTER,
                                            children:[]
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 105, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.CalcButton("A/C", {width: 105, height: 50}, "#6272ED")],
                                        }),
                                        new WebUI.Container({
                                            desired_size: {width: 105, height: 70},
                                            horizontal_alignment: WebUI.Alignment.CENTER, 
                                            vertical_alignment: WebUI.Alignment.CENTER, 
                                            children: [new WebUI.ChangeButton("Scientific ver.", {width: 105, height: 50}, "#E63EF9")],
                                        }),
                                    ]
                                })
                                
                            ]
                        }),
                        new WebUI.Row({
                            children:[
                                new WebUI.Container({
                                    desired_size: {width: 320, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("", {width: 320, height: 50}),WebUI.previous_result6
                                        ]
                                }),
                                new WebUI.Container({
                                    desired_size: {width: 320, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("", {width: 320, height: 50}),WebUI.previous_result5
                                        ]
                                }),
                                new WebUI.Container({
                                    desired_size: {width: 320, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("", {width: 320, height: 50}),WebUI.previous_result4
                                        ]
                                }),
                                new WebUI.Container({
                                    desired_size: {width: 320, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("", {width: 320, height: 50}),WebUI.previous_result3
                                        ]
                                }),
                                new WebUI.Container({
                                    desired_size: {width: 320, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("", {width: 320, height: 50}),WebUI.previous_result2
                                       ]
                                }),
                                new WebUI.Container({
                                    desired_size: {width: 320, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("", {width: 320, height: 50}),WebUI.previous_result1
                                        ]
                                }),
                                new WebUI.Container({
                                    desired_size: {width: 320, height: 70},
                                    horizontal_alignment: WebUI.Alignment.CENTER,
                                    vertical_alignment: WebUI.Alignment.CENTER,
                                    children: [ new WebUI.Resultbox("↑ Previous Result ↑", {width: 320, height: 50}),
                                        ]
                                }),
                            ]
                        })
    
                    ]
                }),
    
    
    
            ]
    
        })
    }


}

//
WebUI.initVisualItems = function() {
    WebUI.widgets.forEach(widget => {
        widget.initVisualItems();
    });
}

WebUI.layoutWhenResourceReady = function() {
    let is_resource_loaded = true;
    for (let i in WebUI.widgets) {
        let widget = WebUI.widgets[i];
        if (!widget.is_resource_ready) {
            is_resource_loaded = false;
            break;
        }
    }

    if (!is_resource_loaded) {
        setTimeout(arguments.callee, 50);
    }
    else {
        WebUI.app.layout();
        WebUI.canvas.requestRenderAll();
    }
}

WebUI.handleKeyPress = function(event) {
    let is_handled = false;

    if (WebUI.focused_widget) {
        is_handled = WebUI.focused_widget.handleKeyPress(event) || is_handled;
    }

    if (is_handled) {
        WebUI.canvas.requestRenderAll();
    }
}

WebUI.handleMouseDown = function(window_p) {
    let is_handled = false;

    if (WebUI.isInCanvas(window_p)) {
        let canvas_p = WebUI.transformToCanvasCoords(window_p);        

        WebUI.is_mouse_dragging = true;
        WebUI.mouse_drag_start = canvas_p;
        WebUI.mouse_drag_prev = canvas_p;

        let widget = WebUI.findWidgetOn(canvas_p);
        if (widget) {
            WebUI.focused_widget = widget;    

            if (widget.is_draggable) {
                WebUI.dragged_widget = widget;
            }
            else {
                WebUI.dragged_widget = null;
            }

            is_handled = widget.handleMouseDown(canvas_p) || is_handled;
        }
        else {
            WebUI.focused_widget = null;
            WebUI.dragged_widget = null;
        }
    }
    else {
        WebUI.is_mouse_dragging = false;
        WebUI.mouse_drag_start = {x:0, y:0};
        WebUI.mouse_drag_prev = {x:0, y:0};

        WebUI.focused_widget = null;
        WebUI.dragged_widget = null;
    }

    if (is_handled) {
        WebUI.canvas.requestRenderAll();
    }
}

WebUI.handleMouseMove = function(window_p) {
    let canvas_p = WebUI.transformToCanvasCoords(window_p);
    let is_handled = false;

    let widget = WebUI.findWidgetOn(canvas_p);
    if (widget != WebUI.hovered_widget) {
        if (WebUI.hovered_widget != null) {
            is_handled = WebUI.hovered_widget.handleMouseExit(canvas_p) || is_handled;
        }
        if (widget != null) {
            is_handled = widget.handleMouseEnter(canvas_p) || is_handled;
        }
        WebUI.hovered_widget = widget;
    }
    else {
        if (widget) {
            is_handled = widget.handleMouseMove(canvas_p) || is_handled;
        }
    }

    if (WebUI.is_mouse_dragging) {
        if (WebUI.dragged_widget != null) {
            let tx = canvas_p.x - WebUI.mouse_drag_prev.x;
            let ty = canvas_p.y - WebUI.mouse_drag_prev.y;
            WebUI.dragged_widget.translate({x: tx, y: ty});

            is_handled = true;
        }
        WebUI.mouse_drag_prev = canvas_p;
    }

    if (is_handled) {
        WebUI.canvas.requestRenderAll();
    }
}

WebUI.handleMouseUp = function(window_p) {
    let is_handled = false;
    let canvas_p = WebUI.transformToCanvasCoords(window_p);

    let widget  = WebUI.findWidgetOn(canvas_p);
    if (widget) {
        is_handled = widget.handleMouseUp(canvas_p) || is_handled;
    }

    if (WebUI.is_mouse_dragging) {
        WebUI.is_mouse_dragging = false;
        WebUI.mouse_drag_start = {x:0, y:0};
        WebUI.mouse_drag_prev = {x:0, y:0};

        WebUI.dragged_widget = null;
        
        is_handled = true;
    }

    if (is_handled) {
        WebUI.canvas.requestRenderAll();
    }
}

WebUI.transformToCanvasCoords = function(window_p) {
    let rect = WebUI.canvas.getElement().getBoundingClientRect();
    let canvas_p = {
        x : window_p.x - rect.left,
        y : window_p.y - rect.top
    };
    return canvas_p;
}

WebUI.isInCanvas = function(window_p) {
    let rect = WebUI.canvas.getElement().getBoundingClientRect();
    if (window_p.x >= rect.left && 
        window_p.x < rect.left + rect.width &&
        window_p.y >= rect.top && 
        window_p.y < rect.top + rect.height) {
        return true;
    }
    else {
        return false;
    }
}

WebUI.findWidgetOn = function(canvas_p) {
    let x = canvas_p.x;
    let y = canvas_p.y;

    for (let i=0; i < this.widgets.length; i++) {
        let widget = this.widgets[i];

        if (x >= widget.position.left &&
            x <= widget.position.left + widget.size.width &&
            y >= widget.position.top &&
            y <= widget.position.top + widget.size.height) {
            return widget;
        }               
    }
    return null;
}

WebUI.maxSize = function(size1, size2) {
    // IMPLEMENT HERE!
    let max_size = {width: 0, height: 0};
    
    max_size.width = (size1.width > size2.width) ?
        size1.width : size2.width;
    max_size.height = (size1.height > size2.height) ?
        size1.height : size2.height;

    return max_size;
}

WebUI.minSize = function(size1, size2) {
    // IMPLEMENT HERE!
    let min_size = {width: 0, height: 0};

    min_size.width = (size1.width < size2.width) ?
        size1.width : size2.width;
    min_size.height = (size1.height < size2.height) ?
        size1.height : size2.height;

    return min_size;
}


//
WebUI.Widget = function(properties) {
    this.type = WebUI.WidgetTypes.UNDEFINED;
    
    this.is_draggable = false;
    this.is_movable = true;

    //
    this.parent = null;
    this.children = [];
    
    //
    this.position = {left: 0, top: 0};
    this.size = {width: 0, height: 0};

    //
    this.visual_items = [];
    this.is_resource_ready = false;

    //
    WebUI.widgets.push(this);

    // IMPLEMENT HERE: code for adding properties
    if (properties != undefined) {
        for (let name in properties) {
            let value = properties[name];
            if (name == 'children') {
                value.forEach(child => {
                    child.parent = this;
                    this.children.push(child);
                });
            }
            else {
                this[name] = value;
            }
        }
    }


    //
    this.setDefaultProperty('desired_size', {width: 0, height: 0});
    this.setDefaultProperty('horizontal_alignment', WebUI.Alignment.CENTER);
    this.setDefaultProperty('vertical_alignment', WebUI.Alignment.TOP);
    this.setDefaultProperty('fill_color', 'white');
    this.setDefaultProperty('stroke_color', 'black');
    this.setDefaultProperty('stroke_width', 1);
    this.setDefaultProperty('text_align', 'left');
    this.setDefaultProperty('text_color', 'black');
    this.setDefaultProperty('font_family', 'System');
    this.setDefaultProperty('font_size', 20);
    this.setDefaultProperty('font_weight', 'bold');
    this.setDefaultProperty('padding', 5);
    this.setDefaultProperty('margin', 10);
}

WebUI.Widget.prototype.setDefaultProperty = function(name, value) {
    if (this[name] == undefined) {
        this[name] = value;
    }
}

WebUI.Widget.prototype.getBoundingRect = function() {
    return {
        left:   this.position.left, 
        top:    this.position.top,
        width:  this.size.width,
        height: this.size.height
    };
}

WebUI.Widget.prototype.layout = function() {
    // IMPLEMENT HERE!
    this.measure();
    this.arrange(this.position);
}

WebUI.Widget.prototype.measure = function() {
    // IMPLEMENT HERE!
    if (this.children.length > 0) {
        this.size_children = {width: 0, height: 0};
        this.children.forEach(child => {
            let size_child = child.measure();
            this.size_children =
                this.extendSizeChildren(this.size_children, size_child);
        });
        this.size = WebUI.maxSize(this.desired_size, this.size_children);
    }
    else {
        this.size.width += this.padding * 2;
        this.size.height += this.padding * 2;
    }
    return this.size;
}
 
WebUI.Widget.prototype.arrange = function(position) {
    // IMPLEMENT HERE!
    this.moveTo(position);
    this.visual_items.forEach(item => {WebUI.canvas.add(item); });

    if (this.children.length > 0) {
        let left_spacing = 0, top_spacing = 0;

        if (this.size.width > this.size_children.width) {
            let room_width = this.size.width - this.size_children.width;

            if (this.horizontal_alignment == WebUI.Alignment.LEFT)
                left_spacing = this.padding;
            else if (this.horizontal_alignment == WebUI.Alignment.CENTER)
                left_spacing = this.padding + room_width / 2.0;
            else if (this.horizontal_alignment == WebUI.Alignment.RIGHT)
                left_spacing = this.padding + room_width;
        }

        if (this.size.height > this.size_children.height) {
            let room_height = 
                this.size.height - this.size_children.height;

            if (this.vertical_alignment == WebUI.Alignment.TOP)
                top_spacing = this.padding;
            else if (this.vertical_alignment == WebUI.Alignment.CENTER)
                top_spacing = this.padding + room_height / 2.0;
            else if (this.vertical_alignment == WebUI.Alignment.BOTTOM)
                top_spacing = this.padding + room_height;
        }

        let next_position = {left: position.left + left_spacing,
            top: position.top + top_spacing};
        this.children.forEach(child => {
            child.arrange(next_position);
            next_position = this.calcNextPosition(next_position, child.size);
        });
    }
}

// default implementation that is expected to be overridden
WebUI.Widget.prototype.extendSizeChildren = function(size, child_size) {
    if (size.width < child_size.width)      size.width = child_size.width;
    if (size.height < child_size.height)    size.height = child_size.height;

    return size;
}

// default implementation that is expected to be overridden
WebUI.Widget.prototype.calcNextPosition = function(position, size) {
    let next_left = position.left + size.width;
    let next_top = position.top;

    return {left: next_left, top: next_top};
}


WebUI.Widget.prototype.initVisualItems = function() {
    this.is_resource_ready = true;
    return true;
}

WebUI.Widget.prototype.moveTo = function(p) {
    if(!this.is_movable)
    {
        return;
    }

    let tx = p.left - this.position.left;
    let ty = p.top - this.position.top;

    this.translate({x: tx, y: ty});
}

WebUI.Widget.prototype.translate = function(v) {
    if(!this.is_movable)
    {
        return;
    }

    this.position.left += v.x;
    this.position.top += v.y;

    this.visual_items.forEach(item => {
        item.left += v.x;
        item.top += v.y;
    });

    this.children.forEach(child_widget => {
        child_widget.translate(v);
    });
}

WebUI.Widget.prototype.destroy = function() {
    if (this == WebUI.focused_widget) WebUI.focused_widget = null;
    if (this == WebUI.dragged_widget) WebUI.dragged_widget = null;
    if (this == WebUI.hovered_widget) WebUI.hovered_widget = null;

    this.visual_items.forEach(item => {
        WebUI.canvas.remove(item);
    });
    this.visual_items = [];
    
    let index = WebUI.widgets.indexOf(this);
    if(index > -1)
    {
        WebUI.widgets.splice(index, 1);
    }

    this.children.forEach(child_widget => {
        child_widget.destroy();
    });
    this.children = [];
}

WebUI.Widget.prototype.handleKeyPress = function(event) {
    return false;
}

WebUI.Widget.prototype.handleMouseDown = function(canvas_p) {
    return false;
}

WebUI.Widget.prototype.handleMouseMove = function(canvas_p) {
    return false;
}

WebUI.Widget.prototype.handleMouseUp = function(canvas_p) {
    return false;
}

WebUI.Widget.prototype.handleMouseEnter = function(canvas_p) {
    return false;
}

WebUI.Widget.prototype.handleMouseExit = function(canvas_p) {
    return false;
}

WebUI.Widget.prototype.handleResize = function() {
    return false;
}


//
WebUI.Container = function(properties) {
    WebUI.Widget.call(this, properties);

    this.type = WebUI.WidgetTypes.CONTAINER;
}

WebUI.Container.prototype = Object.create(WebUI.Widget.prototype);
WebUI.Container.prototype.constructor = WebUI.Container;

WebUI.Container.prototype.extendSizeChildren = function(size, child_size) {
    // IMPLEMENT HERE!
    if (size.width < child_size.width) size.width = child_size.width;
    if (size.height < child_size.height) size.height = child_size.height;

    return size;
}

WebUI.Container.prototype.calcNextPosition = function(position, size) {
    // IMPLEMENT HERE!
    let next_left = position.left;
    let next_top = position.top;

    return {left: next_left, top: next_top};
}

//
WebUI.Column = function(properties) {
    WebUI.Widget.call(this, properties);

    this.type = WebUI.WidgetTypes.COLUMN;
}

WebUI.Column.prototype = Object.create(WebUI.Widget.prototype);
WebUI.Column.prototype.constructor = WebUI.Column;

WebUI.Column.prototype.extendSizeChildren = function(size, child_size) {
    // IMPLEMENT HERE!
    size.width += child_size.width;
    if (size.height < child_size.height) size.height = child_size.height;
    return size;
}

WebUI.Column.prototype.calcNextPosition = function(position, size) {
    // IMPLEMENT HERE!
    let next_left = position.left + size.width;
    let next_top = position.top;
    return {left: next_left, top: next_top};
}


//
WebUI.Row = function(properties) {
    WebUI.Widget.call(this, properties);

    this.type = WebUI.WidgetTypes.ROW;
}

WebUI.Row.prototype = Object.create(WebUI.Widget.prototype);
WebUI.Row.prototype.constructor = WebUI.Row;

WebUI.Row.prototype.extendSizeChildren = function(size, child_size) {
    // IMPLEMENT HERE!
    if (size.width < child_size.width) size.width = child_size.width;
    size.height += child_size.height;
    return size;
}

WebUI.Row.prototype.calcNextPosition = function(position, size) {
    // IMPLEMENT HERE!
    let next_left = position.left;
    let next_top = position.top + size.height;
    return { left: next_left, top: next_top};
}


// Text widget
WebUI.Text = function(label, font_size, text_color) {
    // COPY HERE!
    WebUI.Widget.call(this);
    this.type = WebUI.WidgetTypes.TEXT;
    this.label = label;
    this.font_family = 'System';
    this.font_size = font_size;
    this.font_weight = 'bold';
    this.text_align = 'left';
    this.text_color = text_color;
}

WebUI.Text.prototype = Object.create(WebUI.Widget.prototype)/* COPY HERE! */;
WebUI.Text.prototype.constructor = WebUI.Text/* COPY HERE! */;

WebUI.Text.prototype.initVisualItems = function() {
    // COPY HERE!
    let text = new fabric.Text(this.label, {
        left: this.position.left,
        top: this.position.top,
        selectable: false,
        fontFamily: this.font_family,
        fontSize: this.font_size,
        fontWeight: this.font_weight,
        textAlign: this.text_align,
        stroke: this.text_color,
        fill: this.text_color
    });
    let bound = text.getBoundingRect();
    this.position.left = bound.left-10;
    this.position.top = bound.top-10;
    this.size.width = bound.width;
    this.size.height = bound.height;
    this.visual_items.push(text);
    this.is_resource_ready = true;
}

WebUI.Text.prototype.setLabel = function(new_label) {
    let text = this.visual_items[0];
    text.set('text', new_label);

    this.label = new_label;

    WebUI.canvas.requestRenderAll();
}

// Image widget
WebUI.Image = function(path, desired_size) {
    WebUI.Widget.call(this);

    this.type = WebUI.WidgetTypes.IMAGE;
    this.path = path;
    this.desired_size = desired_size;
}

WebUI.Image.prototype = Object.create(WebUI.Widget.prototype);
WebUI.Image.prototype.constructor = WebUI.Image;

WebUI.Image.prototype.initVisualItems = function() {
    // COPY HERE!
    let widget = this;
    fabric.Image.fromURL(this.path, function(img) {
        if (widget.desired_size != undefined) {
            img.scaleToWidth(widget.desired_size.width);
            img.scaleToHeight(widget.desired_size.height);
            widget.size = widget.desired_size;
        }
        else {
            widget.size = { width: img.width, 
            height: img.height };
        }
        img.set({left: widget.position.left, 
            top: widget.position.top, 
            selectable: false});
        widget.visual_items.push(img);
        widget.is_resource_ready = true;
    });
}


// PushButton widget
WebUI.PushButton = function(label, desired_size) {
    WebUI.Widget.call(this);

    this.type = WebUI.WidgetTypes.PUSH_BUTTON;
    this.label = label;       
    this.desired_size = desired_size;
    this.is_pushed = false;

    this.stroke_color = 'black';
    this.fill_color = 'while';

    this.font_family = 'System';
    this.font_size = 20;
    this.font_weight = 'bold';
    this.text_align = 'center';
    this.text_color = 'black';
}

WebUI.PushButton.prototype = Object.create(WebUI.Widget.prototype);
WebUI.PushButton.prototype.constructor = WebUI.PushButton;

WebUI.PushButton.prototype.initVisualItems = function() {
    let background = new fabric.Rect({
        left: this.position.left,
        top: this.position.top,
        width: this.desired_size.width,
        height: this.desired_size.height,
        rx: 10,
        ry: 10,
        fill: this.fill_color,
        stroke: this.stroke_color,
        strokeWidth: 1,
        selectable: false
    });

    let text = new fabric.Text(this.label, {
        left: this.position.left,
        top: this.position.top,
        selectable: false,
        fontFamily: this.font_family,
        fontSize:   this.font_size,
        fontWeight: this.font_weight,
        textAlign:  this.text_align,
        stroke:     this.text_color,
        fill:       this.text_color,
    });

    let bound = text.getBoundingRect();
    text.left = this.position.left + this.desired_size.width/2 - bound.width/2;
    text.top = this.position.top + this.desired_size.height/2 - bound.height/2;

    this.size = this.desired_size;

    //
    this.visual_items.push(background);
    this.visual_items.push(text);
    this.is_resource_ready = true;
}

WebUI.PushButton.prototype.handleMouseDown = function() {
    // COPY HERE!
    if (!this.is_pushed) {
        this.translate({x:0, y:5});
        this.is_pushed = true;
        if (this.onPushed != undefined) {
        this.onPushed.call(this);
        }
        return true;
    }
    else {
        return false;  
    }
}

WebUI.PushButton.prototype.handleMouseUp = function() {
    // COPY HERE!
    if (this.is_pushed) {
        this.translate({x:0, y:-5});
        this.is_pushed = false;
        return true;
    }
    else {
        return false;
    }
       
}

WebUI.PushButton.prototype.handleMouseEnter = function() {
    // COPY HERE!
    this.visual_items[0].set('strokeWidth', 6);
    return true;
}

WebUI.PushButton.prototype.handleMouseExit = function() {
    // COPY HERE!
    this.visual_items[0].set('strokeWidth', 1);
    if (this.is_pushed) {
        this.translate({x:0, y:-5});
        this.is_pushed = false;
    }
    return true;
}

// TextField widget
WebUI.TextField = function(label, desired_size) {
    WebUI.Widget.call(this);

    this.type = WebUI.WidgetTypes.TEXT_FIELD;
    this.label = label;
    this.desired_size = desired_size;
    this.margin = 10;

    this.stroke_color = 'black';
    this.fill_color = 'white';
    this.stroke_width = 5;    

    this.font_family = 'System';
    this.font_size = 20;
    this.font_weight = 'normal';
    this.text_align = 'left';
    this.text_color = 'black';
}

WebUI.TextField.prototype = Object.create(WebUI.Widget.prototype);
WebUI.TextField.prototype.constructor = WebUI.TextField;

WebUI.TextField.prototype.initVisualItems = function() {
    // COPY HERE!
    let boundary = new fabric.Rect({
        left: this.position.left,
        top: this.position.top,
        width: this.desired_size.width,
        height: this.desired_size.height,
        fill: this.fill_color,
        stroke: this.stroke_color,
        strokeWidth: this.stroke_width,
        selectable: false
    });

    let textbox = new fabric.Textbox(this.label, {
        left: this.position.left + this.margin,
        fontFamily: this.font_family,
        fontSize: this.font_size,
        fontWeight: this.font_weight,
        textAlign: this.text_align,
        stroke: this.text_color,
        fill: this.text_color,
        selectable: false
    });

    let bound = textbox.getBoundingRect();
    textbox.top = this.position.top + (this.desired_size.height - bound.height)/2;
    this.size = this.desired_size;

    this.visual_items.push(boundary);
    this.visual_items.push(textbox);

    this.is_resource_ready = true;

}

WebUI.TextField.prototype.handleMouseDown = function(canvas_p) {
    let textbox = this.visual_items[1];        
    textbox.enterEditing();

    return true;
}

WebUI.TextField.prototype.handleKeyPress = function(event) {
    let boundary = this.visual_items[0];
    let textbox = this.visual_items[1];        

    let new_label = textbox.text;
    let old_label = this.label;
    this.label = new_label;

    if (event.keyCode == 13) {
        let text_enter_removed = new_label.replace(/(\r\n|\n|\r)/gm, "");
        textbox.text = text_enter_removed;
        this.label = text_enter_removed;
        
        if (textbox.hiddenTextarea != null) {
            textbox.hiddenTextarea.value = text_enter_removed;
        }

        textbox.exitEditing();

        return true;    
    }

    if (old_label != new_label && old_label.length < new_label.length) {
        let canvas = document.getElementById("c");
        let context = canvas.getContext("2d");
        context.font = this.font_size.toString() + "px " + this.font_family;

        let boundary_right = boundary.left + boundary.width - this.margin;
        let text_bound = textbox.getBoundingRect();
        let text_width = context.measureText(new_label).width;
        let text_right = text_bound.left + text_width;

        if (boundary_right < text_right) {
            textbox.text = old_label;
            this.label = old_label;
            
            if (textbox.hiddenTextarea != null) {
                textbox.hiddenTextarea.value = old_label;
            }

            return true;
        }
    }
    
    return false;
}


// Switch widget
WebUI.Switch = function(is_on, desired_size) {
    // COPY HERE!
    WebUI.Widget.call(this);
    this.type = WebUI.WidgetTypes.SWITCH;
    this.is_on = false;
    this.desired_size = desired_size;
    this.fill_color = 'rgb(142,142,147)';
    this.stroke_color = 'rgb(142,142,147)';

    this.margin = 10;
}

WebUI.Switch.prototype = Object.create(WebUI.Widget.prototype);
WebUI.Switch.prototype.constructor = WebUI.Switch;

WebUI.Switch.prototype.initVisualItems = function() {
    // COPY HERE!
    let boundary = new fabric.Rect({
        left: this.position.left + this.desired_size.width/4,
        top: this.position.top,
        width: this.desired_size.width/2,
        height: this.desired_size.height,
        fill: this.fill_color,
        stroke: this.stroke_color,
        selectable: false
    });

    let left_Circle = new fabric.Circle({
        left: this.position.left,
        top: this.position.top,
        radius: this.desired_size.width/4,
        fill: this.fill_color,
        stroke: this.stroke_color,
        selectable: false
    });

    let right_Circle = new fabric.Circle({
        left: this.position.left + this.desired_size.width/2,
        top: this.position.top,
        radius: this.desired_size.width/4,
        fill: this.fill_color,
        stroke: this.stroke_color,
        selectable: false
    });

    let switch_Circle = new fabric.Circle({
        left: this.position.left + 0.1 * (this.desired_size.width/4),
        top: this.position.top + 0.1 * (this.desired_size.width/4),
        radius: 0.9 * (this.desired_size.width/4),
        fill: 'white',
        stroke: 'white',
        selectable: false
    });

    this.size = this.desired_size;

    this.visual_items.push(left_Circle);
    this.visual_items.push(right_Circle);
    this.visual_items.push(boundary);
    this.visual_items.push(switch_Circle);
    this.is_resource_ready = true;
}

WebUI.Switch.prototype.handleMouseDown = function() {
    // COPY HERE!
    if (!this.is_on) {
        this.visual_items[0].set('fill', 'rgb(48,209,88)');
        this.visual_items[0].set('stroke', 'rgb(48,209,88)');
        this.visual_items[1].set('fill', 'rgb(48,209,88)');
        this.visual_items[1].set('stroke', 'rgb(48,209,88)');
        this.visual_items[2].set('fill', 'rgb(48,209,88)');
        this.visual_items[2].set('stroke', 'rgb(48,209,88)');
        this.visual_items[3].set('stroke', 'rgb(48,209,88');
        this.visual_items[3].animate('left', 200 + this.desired_size.width / 4.0 * 1.9, {
            onChange: WebUI.canvas.renderAll.bind(WebUI.canvas),
            duration: 100,
            easing: fabric.util.ease.easeOutBounce
        });
        this.is_on = true;
    }

    else{
        this.visual_items[0].set('fill', 'rgb(142,142,147)');
        this.visual_items[0].set('stroke', 'rgb(142,142,147)');
        this.visual_items[1].set('fill', 'rgb(142,142,147)');
        this.visual_items[1].set('stroke', 'rgb(142,142,147)');
        this.visual_items[2].set('fill', 'rgb(142,142,147)');
        this.visual_items[2].set('stroke', 'rgb(142,142,147)');
        this.visual_items[3].set('stroke', 'rgb(142,142,147');
        this.visual_items[3].animate('left', 200 + this.desired_size.width / 4.0 * 0.1, {
            onChange: WebUI.canvas.renderAll.bind(WebUI.canvas),
            duration: 100,
            easing: fabric.util.ease.easeOutBounce
        });

        this.is_on = false;
    }
    return true;
}











WebUI.CalcButton = function(label, desired_size, color){
    WebUI.PushButton.call(this);
    this.type = WebUI.WidgetTypes.CALC_BUTTON;
    this.label = label;
    this.desired_size = desired_size;
    this.is_pushed = false;
    this.stroke_color = color;
    this.fill_color = color;

    
    this.onPushed = WebUI.CalcButton.handleButtonPushed;
}

WebUI.CalcButton.prototype = Object.create(WebUI.PushButton.prototype);
WebUI.CalcButton.prototype.constructor = WebUI.CalcButton;



var result1, result2, result3, result4, result5;
WebUI.CalcButton.handleButtonPushed = function() {
    let parser = math.parser();
    
    result = WebUI.calc_result.label;
    result1 = WebUI.previous_result1.label;
    result2 = WebUI.previous_result2.label;
    result3 = WebUI.previous_result3.label;
    result4 = WebUI.previous_result4.label;
    result5 = WebUI.previous_result5.label;
    result6 = WebUI.previous_result6.label;

    if(this.label == "EV"){
        WebUI.previous_result2.setLabel(result);
        try{
            result = parser.eval(WebUI.calc_result.label).toString();
            var tokens = result.split(' ');
            if(tokens[0] == "function")
            {
                result = tokens[0];
            }
        }
        catch(e)
        {
            result = "ERROR"
        }
        result6 = result4;
        result5 = result3;
        result4 = result2;
        result3 = result1;
        

        WebUI.calc_result.setLabel("");
        WebUI.previous_result6.setLabel(result6);
        WebUI.previous_result5.setLabel(result5);
        WebUI.previous_result4.setLabel(result4);
        WebUI.previous_result3.setLabel(result3);
        WebUI.previous_result1.setLabel("☞" + result);

    }
    
    else {
        if (this.label == "CL"){
            result = "";
            WebUI.calc_result.setLabel(result);
        }
        else if (this.label == "◀"){
            result = result.slice(0, -1);

            WebUI.calc_result.setLabel(result);
        }
        else if (this.label == "A/C"){
            WebUI.calc_result.setLabel("");
            WebUI.previous_result1.setLabel("");
            WebUI.previous_result2.setLabel("");
            WebUI.previous_result3.setLabel("");
            WebUI.previous_result4.setLabel("");
            WebUI.previous_result5.setLabel("");
            WebUI.previous_result6.setLabel("");
        }
        else {

            result += this.label;
            
            WebUI.calc_result.setLabel(result);
        }

    }

    
    
};





WebUI.Resultbox = function(label, desired_size) {
    WebUI.Widget.call(this);

    this.type = WebUI.WidgetTypes.TEXT_FIELD;
    this.label = label;
    this.desired_size = desired_size;


    this.stroke_color = 'black';
    this.fill_color = 'white';
    this.stroke_width = 3;    

    this.font_family = 'System';
    this.font_size = 30;
    this.font_weight = 'bold';
    this.text_align = 'right';
    this.text_color = 'black'; 
}

WebUI.Resultbox.prototype = Object.create(WebUI.Widget.prototype);
WebUI.Resultbox.prototype.constructor = WebUI.TextField;

WebUI.Resultbox.prototype.initVisualItems = function() {
    let boundary = new fabric.Rect({
        left: this.position.left,
        top: this.position.top,
        rx: 10,
        ry: 10,
        width: this.desired_size.width,
        height: this.desired_size.height,
        fill: this.fill_color,
        stroke: this.stroke_color,
        strokeWidth: this.stroke_width,
        selectable: false
    });

    let text = new fabric.Text(this.label, {
        left: this.position.left,
        top: this.position.top,
        selectable: false,
        fontFamily: this.font_family,
        fontSize:   this.font_size,
        fontWeight: this.font_weight,
        textAlign:  this.text_align,
        stroke:     this.text_color,
        fill:       this.text_color,
    });
    let bound = text.getBoundingRect();
    text.left = this.position.left + this.desired_size.width/2 - bound.width/2;
    text.top = this.position.top + this.desired_size.height/2 - bound.height/2;

    this.size = this.desired_size;

    //
    this.visual_items.push(boundary);
    this.visual_items.push(text);
    this.is_resource_ready = true;
}


WebUI.ChangeButton = function(label, desired_size, color){
    WebUI.PushButton.call(this);
    this.type = WebUI.WidgetTypes.CHANGE_BUTTON;
    this.label = label;
    this.desired_size = desired_size;
    this.is_pushed = false;
    this.stroke_color = color;
    this.fill_color = color;
    this.font_size = 15;

    
    this.onPushed = WebUI.ChangeButton.handleButtonPushed;
}

WebUI.ChangeButton.prototype = Object.create(WebUI.PushButton.prototype);
WebUI.ChangeButton.prototype.constructor = WebUI.ChangeButton;
var Calcmode = "Scientific";

WebUI.ChangeButton.handleButtonPushed = function() {
    if(Calcmode == "Scientific"){
        Calcmode = "Simple";
        WebUI.widgets = [];
        WebUI.canvas.clear();
        WebUI.initWidgets();
        WebUI.initVisualItems();
        WebUI.layoutWhenResourceReady();
        console.log(Calcmode);
    }

    else{
        Calcmode="Scientific";
        WebUI.widgets = [];
        WebUI.canvas.clear();
        WebUI.initWidgets();
        WebUI.initVisualItems();
        WebUI.layoutWhenResourceReady();
        console.log(Calcmode);
    }
};



//grphplot
WebUI.GraphPlot = function(label, desired_size, properties) {
    WebUI.PushButton.call(this, label, desired_size, properties);
    this.fill_color='white';
    this.type = WebUI.WidgetTypes.GRAPH_PLOT;
    this.label = label;
    this.desired_size = desired_size;
    this.is_pushed = false;
    

    this.onPushed = WebUI.GraphPlot.StateButtonPushed;
}
WebUI.GraphPlot.prototype = Object.create(WebUI.PushButton.prototype);
WebUI.GraphPlot.prototype.constructor = WebUI.PushButton;
WebUI.GraphPlot.StateButtonPushed = function(){
    let func = '';
    let i = -5;
    let j = -5;
    let x_range = [];
    let y_range = [];
    while (i<5){
        x_range.push(i);
        i = i + 0.1;
    }
    let parser = math.parser();
    try{
        func = WebUI.calc_result.label;
        func_list = func.split('=');
        if(func_list[0]=='f(x)'||func_list[0]=='y'){
            cal = func_list[1];
            
            while (j<5){
                y = cal.replace('x',j);
                //console.log(y);
                y = parser.eval(y);
                //console.log(y);
                y_range.push(y);
                j = j + 0.1;
            }
            console.log(y_range);   
        }
    }catch(e){
        if(result != 'function')
            {
                WebUI.calc_result.setTextField('error');
            }
    }
    GRAPHDRAWING = document.getElementById('graphdrawing');
    Plotly.plot(GRAPHDRAWING, [{
        x: x_range,
        y: y_range }],
        { margin: { t: 0 } }
      );
}




$(document).ready(function() {    
    WebUI.initialize();
});