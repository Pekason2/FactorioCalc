export class Calculator {

    //<editor-fold desc="Attributes" defaultstate="collapsed">
        #ajaxPreset = "../public/index.php?class=Calculator&function=";


    //</editor-fold>

    //<editor-fold desc="Getter & Setter" defaultstate="collapsed">

    //</editor-fold>

    constructor() {
        this.styleFirstInput();
        this.fetchVariables();
        this.addFacilityOption("facilities", "Facilities");
        this.addFacilityOption("crafter-t1", "Base Crafter");
        this.addFacilityOption("crafter-t2", "Blue Crafter");
        this.addFacilityOption("crafter-t3", "Green Crafter");
    }

    styleFirstInput()
    {
        $("div").each(function()
        {
            // Wähle das erste <select> oder <input>-Element (je nachdem, welches zuerst kommt)
            $(this).find("select, input").first().addClass("first");
        });
    }

    fetchVariables()
    {
        $.ajax({url: this.#ajaxPreset + "fetchVariables", success: function(result)
            {
                JSON.parse(result);

                console.log(result);
            }
        });
    }

    addFacilityOption(option, name)
    {
        $("#facility-names").append(`<option value='${option}'>${name}</option>`);
    }
}