package car;


public class Engine {
    Integer celindrs;
    String modelEngine;

    public Engine(Integer celindrs, String modelEngine) {
        this.celindrs = celindrs;
        this.modelEngine = modelEngine;
    }

    public Engine() {
        this.celindrs = 4;
        this.modelEngine = "four";
    }

    public int getCelindrs() {
        return celindrs;
    }

    public void setCelindrs(Integer celindrs) {
        this.celindrs = celindrs;
    }

    public String getModelEngine() {
        return modelEngine;
    }

    public String getEngine() {
        return modelEngine + " " + celindrs;
    }

    public void setModelEngine(String modelEngine) {
        this.modelEngine = modelEngine;
    }

    public void setEngineFull(Integer celindrs, String modelEngine) {
        this.celindrs = celindrs;
        this.modelEngine = modelEngine;
    }
}
