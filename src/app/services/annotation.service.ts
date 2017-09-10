import { Injectable, Type } from '@angular/core';

@Injectable()
export class AnnotationService {

    constructor() { }

    Reflect: any;
    getAnnotation(typeOrFunc: Type<any>): any[] | null {
        // Prefer the direct API.
        if ((<any>typeOrFunc).annotations) {
            let annotations = (<any>typeOrFunc).annotations;
            if (typeof annotations === 'function' && annotations.annotations) {
                annotations = annotations.annotations;
            }
            return annotations[0];
        }

        // API of tsickle for lowering decorators to properties on the class.
        if ((<any>typeOrFunc).decorators) {
            return this.convertTsickleDecoratorIntoMetadata((<any>typeOrFunc).decorators)[0];
        }

        // API for metadata created by invoking the decorators.
        if (this.Reflect && this.Reflect.getOwnMetadata) {
            return this.Reflect.getOwnMetadata('annotations', typeOrFunc)[0];
        }
        return null;
    }

    convertTsickleDecoratorIntoMetadata(decoratorInvocations: any[]): any[] {
        if (!decoratorInvocations) {
            return [];
        }
        return decoratorInvocations.map(decoratorInvocation => {
            const decoratorType = decoratorInvocation.type;
            const annotationCls = decoratorType.annotationCls;
            const annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
            return new annotationCls(...annotationArgs);
        });
    }
}