# `googleSaasRuntimeUnit` Submodule <a name="`googleSaasRuntimeUnit` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeUnit <a name="GoogleSaasRuntimeUnit" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit google_saas_runtime_unit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnit(scope: Construct, id: string, config: GoogleSaasRuntimeUnitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig">GoogleSaasRuntimeUnitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig">GoogleSaasRuntimeUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.putMaintenance">putMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetMaintenance">resetMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetManagementMode">resetManagementMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetTenant">resetTenant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetUnitKind">resetUnitKind</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaintenance` <a name="putMaintenance" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.putMaintenance"></a>

```typescript
public putMaintenance(value: GoogleSaasRuntimeUnitMaintenance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.putMaintenance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenance">GoogleSaasRuntimeUnitMaintenance</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSaasRuntimeUnitTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts">GoogleSaasRuntimeUnitTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaintenance` <a name="resetMaintenance" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetMaintenance"></a>

```typescript
public resetMaintenance(): void
```

##### `resetManagementMode` <a name="resetManagementMode" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetManagementMode"></a>

```typescript
public resetManagementMode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTenant` <a name="resetTenant" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetTenant"></a>

```typescript
public resetTenant(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUnitKind` <a name="resetUnitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.resetUnitKind"></a>

```typescript
public resetUnitKind(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeUnit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.isConstruct"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.isTerraformElement"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.isTerraformResource"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.generateConfigForImport"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleSaasRuntimeUnit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSaasRuntimeUnit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSaasRuntimeUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList">GoogleSaasRuntimeUnitConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList">GoogleSaasRuntimeUnitDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.dependents">dependents</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList">GoogleSaasRuntimeUnitDependentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList">GoogleSaasRuntimeUnitInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.maintenance">maintenance</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference">GoogleSaasRuntimeUnitMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.ongoingOperations">ongoingOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.outputVariables">outputVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList">GoogleSaasRuntimeUnitOutputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.pendingOperations">pendingOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.release">release</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.scheduledOperations">scheduledOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.systemCleanupAt">systemCleanupAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.systemManagedState">systemManagedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference">GoogleSaasRuntimeUnitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.maintenanceInput">maintenanceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenance">GoogleSaasRuntimeUnitMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.managementModeInput">managementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.tenantInput">tenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts">GoogleSaasRuntimeUnitTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.unitIdInput">unitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.unitKindInput">unitKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.managementMode">managementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.tenant">tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.unitId">unitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.unitKind">unitKind</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.conditions"></a>

```typescript
public readonly conditions: GoogleSaasRuntimeUnitConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList">GoogleSaasRuntimeUnitConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.dependencies"></a>

```typescript
public readonly dependencies: GoogleSaasRuntimeUnitDependenciesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList">GoogleSaasRuntimeUnitDependenciesList</a>

---

##### `dependents`<sup>Required</sup> <a name="dependents" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.dependents"></a>

```typescript
public readonly dependents: GoogleSaasRuntimeUnitDependentsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList">GoogleSaasRuntimeUnitDependentsList</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.inputVariables"></a>

```typescript
public readonly inputVariables: GoogleSaasRuntimeUnitInputVariablesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList">GoogleSaasRuntimeUnitInputVariablesList</a>

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.maintenance"></a>

```typescript
public readonly maintenance: GoogleSaasRuntimeUnitMaintenanceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference">GoogleSaasRuntimeUnitMaintenanceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ongoingOperations`<sup>Required</sup> <a name="ongoingOperations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.ongoingOperations"></a>

```typescript
public readonly ongoingOperations: string[];
```

- *Type:* string[]

---

##### `outputVariables`<sup>Required</sup> <a name="outputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.outputVariables"></a>

```typescript
public readonly outputVariables: GoogleSaasRuntimeUnitOutputVariablesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList">GoogleSaasRuntimeUnitOutputVariablesList</a>

---

##### `pendingOperations`<sup>Required</sup> <a name="pendingOperations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.pendingOperations"></a>

```typescript
public readonly pendingOperations: string[];
```

- *Type:* string[]

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.release"></a>

```typescript
public readonly release: string;
```

- *Type:* string

---

##### `scheduledOperations`<sup>Required</sup> <a name="scheduledOperations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.scheduledOperations"></a>

```typescript
public readonly scheduledOperations: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemCleanupAt`<sup>Required</sup> <a name="systemCleanupAt" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.systemCleanupAt"></a>

```typescript
public readonly systemCleanupAt: string;
```

- *Type:* string

---

##### `systemManagedState`<sup>Required</sup> <a name="systemManagedState" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.systemManagedState"></a>

```typescript
public readonly systemManagedState: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSaasRuntimeUnitTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference">GoogleSaasRuntimeUnitTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceInput`<sup>Optional</sup> <a name="maintenanceInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.maintenanceInput"></a>

```typescript
public readonly maintenanceInput: GoogleSaasRuntimeUnitMaintenance;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenance">GoogleSaasRuntimeUnitMaintenance</a>

---

##### `managementModeInput`<sup>Optional</sup> <a name="managementModeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.managementModeInput"></a>

```typescript
public readonly managementModeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.tenantInput"></a>

```typescript
public readonly tenantInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSaasRuntimeUnitTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts">GoogleSaasRuntimeUnitTimeouts</a>

---

##### `unitIdInput`<sup>Optional</sup> <a name="unitIdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.unitIdInput"></a>

```typescript
public readonly unitIdInput: string;
```

- *Type:* string

---

##### `unitKindInput`<sup>Optional</sup> <a name="unitKindInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.unitKindInput"></a>

```typescript
public readonly unitKindInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managementMode`<sup>Required</sup> <a name="managementMode" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.managementMode"></a>

```typescript
public readonly managementMode: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

---

##### `unitId`<sup>Required</sup> <a name="unitId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.unitId"></a>

```typescript
public readonly unitId: string;
```

- *Type:* string

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.unitKind"></a>

```typescript
public readonly unitKind: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeUnitConditions <a name="GoogleSaasRuntimeUnitConditions" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditions.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitConditions: googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditions = { ... }
```


### GoogleSaasRuntimeUnitConfig <a name="GoogleSaasRuntimeUnitConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitConfig: googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.unitId">unitId</a></code> | <code>string</code> | The ID value for the new unit. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#id GoogleSaasRuntimeUnit#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.maintenance">maintenance</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenance">GoogleSaasRuntimeUnitMaintenance</a></code> | maintenance block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.managementMode">managementMode</a></code> | <code>string</code> | Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. Possible values: MANAGEMENT_MODE_USER MANAGEMENT_MODE_SYSTEM. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#project GoogleSaasRuntimeUnit#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.tenant">tenant</a></code> | <code>string</code> | Reference to the Saas Tenant resource this unit belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts">GoogleSaasRuntimeUnitTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.unitKind">unitKind</a></code> | <code>string</code> | Reference to the UnitKind this Unit belongs to. Immutable once set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#location GoogleSaasRuntimeUnit#location}

---

##### `unitId`<sup>Required</sup> <a name="unitId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.unitId"></a>

```typescript
public readonly unitId: string;
```

- *Type:* string

The ID value for the new unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#unit_id GoogleSaasRuntimeUnit#unit_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#annotations GoogleSaasRuntimeUnit#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#deletion_policy GoogleSaasRuntimeUnit#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#id GoogleSaasRuntimeUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#labels GoogleSaasRuntimeUnit#labels}

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.maintenance"></a>

```typescript
public readonly maintenance: GoogleSaasRuntimeUnitMaintenance;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenance">GoogleSaasRuntimeUnitMaintenance</a>

maintenance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#maintenance GoogleSaasRuntimeUnit#maintenance}

---

##### `managementMode`<sup>Optional</sup> <a name="managementMode" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.managementMode"></a>

```typescript
public readonly managementMode: string;
```

- *Type:* string

Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. Possible values: MANAGEMENT_MODE_USER MANAGEMENT_MODE_SYSTEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#management_mode GoogleSaasRuntimeUnit#management_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#project GoogleSaasRuntimeUnit#project}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

Reference to the Saas Tenant resource this unit belongs to.

This for
example informs the maintenance policies to use for scheduling future
updates on a unit. (optional and immutable once created)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#tenant GoogleSaasRuntimeUnit#tenant}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSaasRuntimeUnitTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts">GoogleSaasRuntimeUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#timeouts GoogleSaasRuntimeUnit#timeouts}

---

##### `unitKind`<sup>Optional</sup> <a name="unitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConfig.property.unitKind"></a>

```typescript
public readonly unitKind: string;
```

- *Type:* string

Reference to the UnitKind this Unit belongs to. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#unit_kind GoogleSaasRuntimeUnit#unit_kind}

---

### GoogleSaasRuntimeUnitDependencies <a name="GoogleSaasRuntimeUnitDependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependencies.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitDependencies: googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependencies = { ... }
```


### GoogleSaasRuntimeUnitDependents <a name="GoogleSaasRuntimeUnitDependents" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependents.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitDependents: googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependents = { ... }
```


### GoogleSaasRuntimeUnitInputVariables <a name="GoogleSaasRuntimeUnitInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariables.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitInputVariables: googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariables = { ... }
```


### GoogleSaasRuntimeUnitMaintenance <a name="GoogleSaasRuntimeUnitMaintenance" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenance.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitMaintenance: googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenance.property.pinnedUntilTime">pinnedUntilTime</a></code> | <code>string</code> | If present, it fixes the release on the unit until the given time; |

---

##### `pinnedUntilTime`<sup>Optional</sup> <a name="pinnedUntilTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenance.property.pinnedUntilTime"></a>

```typescript
public readonly pinnedUntilTime: string;
```

- *Type:* string

If present, it fixes the release on the unit until the given time;

i.e.
changes to the release field will be rejected. Rollouts should and will
also respect this by not requesting an upgrade in the first place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#pinned_until_time GoogleSaasRuntimeUnit#pinned_until_time}

---

### GoogleSaasRuntimeUnitOutputVariables <a name="GoogleSaasRuntimeUnitOutputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariables.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitOutputVariables: googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariables = { ... }
```


### GoogleSaasRuntimeUnitTimeouts <a name="GoogleSaasRuntimeUnitTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitTimeouts: googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#create GoogleSaasRuntimeUnit#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#delete GoogleSaasRuntimeUnit#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#update GoogleSaasRuntimeUnit#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#create GoogleSaasRuntimeUnit#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#delete GoogleSaasRuntimeUnit#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit#update GoogleSaasRuntimeUnit#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeUnitConditionsList <a name="GoogleSaasRuntimeUnitConditionsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.get"></a>

```typescript
public get(index: number): GoogleSaasRuntimeUnitConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleSaasRuntimeUnitConditionsOutputReference <a name="GoogleSaasRuntimeUnitConditionsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditions">GoogleSaasRuntimeUnitConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitConditions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitConditions">GoogleSaasRuntimeUnitConditions</a>

---


### GoogleSaasRuntimeUnitDependenciesList <a name="GoogleSaasRuntimeUnitDependenciesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.get"></a>

```typescript
public get(index: number): GoogleSaasRuntimeUnitDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleSaasRuntimeUnitDependenciesOutputReference <a name="GoogleSaasRuntimeUnitDependenciesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependencies">GoogleSaasRuntimeUnitDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitDependencies;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependencies">GoogleSaasRuntimeUnitDependencies</a>

---


### GoogleSaasRuntimeUnitDependentsList <a name="GoogleSaasRuntimeUnitDependentsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.get"></a>

```typescript
public get(index: number): GoogleSaasRuntimeUnitDependentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleSaasRuntimeUnitDependentsOutputReference <a name="GoogleSaasRuntimeUnitDependentsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependents">GoogleSaasRuntimeUnitDependents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitDependents;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitDependents">GoogleSaasRuntimeUnitDependents</a>

---


### GoogleSaasRuntimeUnitInputVariablesList <a name="GoogleSaasRuntimeUnitInputVariablesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.get"></a>

```typescript
public get(index: number): GoogleSaasRuntimeUnitInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleSaasRuntimeUnitInputVariablesOutputReference <a name="GoogleSaasRuntimeUnitInputVariablesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariables">GoogleSaasRuntimeUnitInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitInputVariables;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitInputVariables">GoogleSaasRuntimeUnitInputVariables</a>

---


### GoogleSaasRuntimeUnitMaintenanceOutputReference <a name="GoogleSaasRuntimeUnitMaintenanceOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.resetPinnedUntilTime">resetPinnedUntilTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPinnedUntilTime` <a name="resetPinnedUntilTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.resetPinnedUntilTime"></a>

```typescript
public resetPinnedUntilTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTimeInput">pinnedUntilTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTime">pinnedUntilTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenance">GoogleSaasRuntimeUnitMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pinnedUntilTimeInput`<sup>Optional</sup> <a name="pinnedUntilTimeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTimeInput"></a>

```typescript
public readonly pinnedUntilTimeInput: string;
```

- *Type:* string

---

##### `pinnedUntilTime`<sup>Required</sup> <a name="pinnedUntilTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTime"></a>

```typescript
public readonly pinnedUntilTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitMaintenance;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitMaintenance">GoogleSaasRuntimeUnitMaintenance</a>

---


### GoogleSaasRuntimeUnitOutputVariablesList <a name="GoogleSaasRuntimeUnitOutputVariablesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.get"></a>

```typescript
public get(index: number): GoogleSaasRuntimeUnitOutputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleSaasRuntimeUnitOutputVariablesOutputReference <a name="GoogleSaasRuntimeUnitOutputVariablesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariables">GoogleSaasRuntimeUnitOutputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitOutputVariables;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitOutputVariables">GoogleSaasRuntimeUnitOutputVariables</a>

---


### GoogleSaasRuntimeUnitTimeoutsOutputReference <a name="GoogleSaasRuntimeUnitTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnit } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts">GoogleSaasRuntimeUnitTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnit.GoogleSaasRuntimeUnitTimeouts">GoogleSaasRuntimeUnitTimeouts</a>

---



