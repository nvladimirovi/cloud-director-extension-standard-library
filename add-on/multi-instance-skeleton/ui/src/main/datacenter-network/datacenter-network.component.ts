/*
 * Copyright 2020-2023 VMware, Inc. All rights reserved. VMware Confidential
 */

import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EntityContextExtensionInterface } from "../common/entity-context-extension.interface";

@Component({
    selector: "datacenter-network",
    templateUrl: "./datacenter-network.component.html",
    host: {'class': 'content-container'}
})
export class DatacenterNetworkComponent implements EntityContextExtensionInterface, OnInit, OnDestroy {
    username: Observable<string>;
    tenant: Observable<string>;

    contextEntityId: string = "";

    contextUrn(entityId: string): void {
        this.contextEntityId = entityId;
    }

    constructor() {}

    ngOnInit(): void {}

    ngOnDestroy(): void {
        console.warn("[Showcase 3.0]", `${this.constructor.name} destroyed`);
    }
}
