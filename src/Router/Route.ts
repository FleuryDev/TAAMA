import {RouteObject, Routes} from "react-router";

class Route extends  Routes{
    public constructor() {
    super()
    }
    static  Add({} : RouteObject ){
    return this
    }
    public get(): RouteObject{
        return {

        }
    }
}