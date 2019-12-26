import { ParagraphComponent } from "./ParagraphComponent";

$(document).ready(function () {

    function Paragraph(props) {
        return <p>{props.text}</p>;
    }

    var FirstView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },
        render() {
            console.log('Backbone js initiated...')
            // ReactDOM.render(<Paragraph text="hello" />, this.el)
            ReactDOM.render(<ParagraphComponent text="hello" />, this.el)

            return this;
        }

    })

    const model = new Backbone.Model({ text: 'React works with Backbone!' });
    const view = new FirstView({ model, el: "#app" });



    // firstView.render();
})