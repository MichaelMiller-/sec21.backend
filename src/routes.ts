import {listProjects} from "./controller/ListProjects";
import {listStructuralPoints} from "./controller/ListStructuralPoints"
import {listMaterials} from "./controller/ListMaterials";
import {listCrossSections} from "./controller/ListCrossSections";
import {listLoadCases} from "./controller/ListLoadCases";
import {listCurveMembers} from "./controller/ListCurveMembers";
import {listPointSupports} from "./controller/ListPointSupports";
import {listPointActions} from "./controller/ListPointActions";
import {listSurfaceMembers} from "./controller/ListSurfaceMembers";
import {addProject} from "./controller/AddProject";
import {addStructuralPoint} from "./controller/AddStructuralPoint";
import {addMaterial} from "./controller/AddMaterial";
import {addCrossSection} from "./controller/AddCrossSection";
import {addLoadCase} from "./controller/AddLoadCase";
import {addPointAction} from "./controller/AddPointAction";
import {addCurveMember} from "./controller/AddCurveMember";
import {addPointSupport} from "./controller/AddPointSupport";
import {deleteStructuralPoint} from "./controller/DeleteStructuralPoint";
import {deleteMaterial} from "./controller/DeleteMaterial";
import {deleteCurveMember} from "./controller/DeleteCurveMember";
import {deleteCrossSection} from "./controller/DeleteCrossSection";
import {deletePointSupport} from "./controller/DeletePointSupport";
import {deletePointAction} from "./controller/DeletePointAction";
import {getProject} from "./controller/GetProject";
import {getMaterial} from "./controller/GetMaterial";
import {getCrossSection} from "./controller/GetCrossSection";
import {deleteProject} from "./controller/DeleteProject";
import {addSurfaceMember} from "./controller/AddSurfaceMember";
import {listStructuralCurveAction} from "./controller/ListStructuralCurveAction";
import {addStructuralCurveAction} from "./controller/AddStructuralCurveAction";
import {deleteLoadCase} from "./controller/DeleteLoadCase";

export const appRoutes = [
    {
        path: "/projects",
        method: "get",
        action: listProjects
    },
    {
        path: "/structuralpoints/:id",
        method: "get",
        action: listStructuralPoints
    },
    {
        path: "/materials/:id",
        method: "get",
        action: listMaterials
    },
    {
        path: "/crosssections/:id",
        method: "get",
        action: listCrossSections
    },
    {
        path: "/loadcases/:id",
        method: "get",
        action: listLoadCases
    },
    {
        path: "/curvemembers/:id",
        method: "get",
        action: listCurveMembers
    },
    {
        path: "/pointsupports/:id",
        method: "get",
        action: listPointSupports
    },
    {
        path: "/pointactions/:id",
        method: "get",
        action: listPointActions
    },
    {
        path: "/surfacemembers/:id",
        method: "get",
        action: listSurfaceMembers
    },
    {
        path: "/structuralcurveaction/:id",
        method: "get",
        action: listStructuralCurveAction
    },
    {
        path: "/projects",
        method: "post",
        action: addProject
    },
    {
        path: "/structuralpoints/:id",
        method: "post",
        action: addStructuralPoint
    },
    {
        path: "/materials/:id",
        method: "post",
        action: addMaterial
    },
    {
        path: "/crosssections/:id/:material",
        method: "post",
        action: addCrossSection
    },
    {
        path: "/loadcases/:id",
        method: "post",
        action: addLoadCase
    },
    {
        path: "/pointaction/:loadcase/:pt",
        method: "post",
        action: addPointAction
    },
    {
        path: "/pointsupport/:pt",
        method: "post",
        action: addPointSupport
    },
    {
        path: "/curvemember/:id/:from/:to/:cs",
        method: "post",
        action: addCurveMember
    },
    {
        path: "/surfacemembers/:id/:material",
        method: "post",
        action: addSurfaceMember
    },
    {
        path: "/structuralcurveaction/:member/:lc",
        method: "post",
        action: addStructuralCurveAction
    },
    {
        path: "/project/:id",
        method: "delete",
        action: deleteProject
    },
    {
        path: "/structuralpoint/:id",
        method: "delete",
        action: deleteStructuralPoint
    },
    {
        path: "/curvemember/:id",
        method: "delete",
        action: deleteCurveMember
    },
    {
        path: "/material/:id",
        method: "delete",
        action: deleteMaterial
    },
    {
        path: "/crosssection/:id",
        method: "delete",
        action: deleteCrossSection
    },
    {
        path: "/pointsupport/:id",
        method: "delete",
        action: deletePointSupport
    },
    {
        path: "/pointaction/:id",
        method: "delete",
        action: deletePointAction
    },
    {
        path: "/loadcase/:id",
        method: "delete",
        action: deleteLoadCase
    },
    {
        path: "/project/:id",
        method: "get",
        action: getProject
    },
    {
        path: "/material/:id",
        method: "get",
        action: getMaterial
    },
    {
        path: "/crosssection/:id",
        method: "get",
        action: getCrossSection
    },
];