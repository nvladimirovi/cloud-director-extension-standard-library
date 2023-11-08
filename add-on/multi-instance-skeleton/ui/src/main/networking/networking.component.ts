/*
 * Copyright 2020-2023 VMware, Inc. All rights reserved. VMware Confidential
 */

import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EntityContextExtensionInterface } from "../common/entity-context-extension.interface";

@Component({
    selector: "networking",
    templateUrl: "./networking.component.html",
    host: {'class': 'content-container'}
})
export class NetworkingComponent implements EntityContextExtensionInterface, OnInit, OnDestroy {
    username: Observable<string>;
    tenant: Observable<string>;

    contextEntityId: string = "";

    constructor() {}

    ngOnInit(): void {}

    contextUrn(entityId: string) {
        this.contextEntityId = entityId;
    }

    ngOnDestroy(): void {
        console.warn("[Showcase 2.0]", `${this.constructor.name} destroyed`);
    }
}