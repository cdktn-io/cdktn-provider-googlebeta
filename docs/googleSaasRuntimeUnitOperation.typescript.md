# `googleSaasRuntimeUnitOperation` Submodule <a name="`googleSaasRuntimeUnitOperation` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeUnitOperation <a name="GoogleSaasRuntimeUnitOperation" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation google_saas_runtime_unit_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation(scope: Construct, id: string, config: GoogleSaasRuntimeUnitOperationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig">GoogleSaasRuntimeUnitOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig">GoogleSaasRuntimeUnitOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putDeprovision">putDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putProvision">putProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putUpgrade">putUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetDeprovision">resetDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProvision">resetProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetUpgrade">resetUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetWaitForCompletion">resetWaitForCompletion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeprovision` <a name="putDeprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putDeprovision"></a>

```typescript
public putDeprovision(value: GoogleSaasRuntimeUnitOperationDeprovision): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putDeprovision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

---

##### `putProvision` <a name="putProvision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putProvision"></a>

```typescript
public putProvision(value: GoogleSaasRuntimeUnitOperationProvision): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putProvision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSaasRuntimeUnitOperationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

---

##### `putUpgrade` <a name="putUpgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putUpgrade"></a>

```typescript
public putUpgrade(value: GoogleSaasRuntimeUnitOperationUpgrade): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putUpgrade.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeprovision` <a name="resetDeprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetDeprovision"></a>

```typescript
public resetDeprovision(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProvision` <a name="resetProvision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProvision"></a>

```typescript
public resetProvision(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpgrade` <a name="resetUpgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetUpgrade"></a>

```typescript
public resetUpgrade(): void
```

##### `resetWaitForCompletion` <a name="resetWaitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetWaitForCompletion"></a>

```typescript
public resetWaitForCompletion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleSaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSaasRuntimeUnitOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSaasRuntimeUnitOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeUnitOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList">GoogleSaasRuntimeUnitOperationConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference">GoogleSaasRuntimeUnitOperationDeprovisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.engineState">engineState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.errorCategory">errorCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provision">provision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference">GoogleSaasRuntimeUnitOperationProvisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference">GoogleSaasRuntimeUnitOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference">GoogleSaasRuntimeUnitOperationUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovisionInput">deprovisionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisionInput">provisionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationIdInput">unitOperationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgradeInput">upgradeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletionInput">waitForCompletionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationId">unitOperationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletion">waitForCompletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.conditions"></a>

```typescript
public readonly conditions: GoogleSaasRuntimeUnitOperationConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList">GoogleSaasRuntimeUnitOperationConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deprovision`<sup>Required</sup> <a name="deprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovision"></a>

```typescript
public readonly deprovision: GoogleSaasRuntimeUnitOperationDeprovisionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference">GoogleSaasRuntimeUnitOperationDeprovisionOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `engineState`<sup>Required</sup> <a name="engineState" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.engineState"></a>

```typescript
public readonly engineState: string;
```

- *Type:* string

---

##### `errorCategory`<sup>Required</sup> <a name="errorCategory" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.errorCategory"></a>

```typescript
public readonly errorCategory: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `provision`<sup>Required</sup> <a name="provision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provision"></a>

```typescript
public readonly provision: GoogleSaasRuntimeUnitOperationProvisionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference">GoogleSaasRuntimeUnitOperationProvisionOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSaasRuntimeUnitOperationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference">GoogleSaasRuntimeUnitOperationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `upgrade`<sup>Required</sup> <a name="upgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgrade"></a>

```typescript
public readonly upgrade: GoogleSaasRuntimeUnitOperationUpgradeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference">GoogleSaasRuntimeUnitOperationUpgradeOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deprovisionInput`<sup>Optional</sup> <a name="deprovisionInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovisionInput"></a>

```typescript
public readonly deprovisionInput: GoogleSaasRuntimeUnitOperationDeprovision;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `provisionInput`<sup>Optional</sup> <a name="provisionInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisionInput"></a>

```typescript
public readonly provisionInput: GoogleSaasRuntimeUnitOperationProvision;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSaasRuntimeUnitOperationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `unitOperationIdInput`<sup>Optional</sup> <a name="unitOperationIdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationIdInput"></a>

```typescript
public readonly unitOperationIdInput: string;
```

- *Type:* string

---

##### `upgradeInput`<sup>Optional</sup> <a name="upgradeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgradeInput"></a>

```typescript
public readonly upgradeInput: GoogleSaasRuntimeUnitOperationUpgrade;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

---

##### `waitForCompletionInput`<sup>Optional</sup> <a name="waitForCompletionInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletionInput"></a>

```typescript
public readonly waitForCompletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `unitOperationId`<sup>Required</sup> <a name="unitOperationId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationId"></a>

```typescript
public readonly unitOperationId: string;
```

- *Type:* string

---

##### `waitForCompletion`<sup>Required</sup> <a name="waitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletion"></a>

```typescript
public readonly waitForCompletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeUnitOperationConditions <a name="GoogleSaasRuntimeUnitOperationConditions" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitOperationConditions: googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions = { ... }
```


### GoogleSaasRuntimeUnitOperationConfig <a name="GoogleSaasRuntimeUnitOperationConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitOperationConfig: googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unit">unit</a></code> | <code>string</code> | The Unit a given UnitOperation will act upon. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unitOperationId">unitOperationId</a></code> | <code>string</code> | The ID value for the new unit operation. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | deprovision block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#id GoogleSaasRuntimeUnitOperation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#project GoogleSaasRuntimeUnitOperation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provision">provision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | provision block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.waitForCompletion">waitForCompletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#location GoogleSaasRuntimeUnitOperation#location}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The Unit a given UnitOperation will act upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#unit GoogleSaasRuntimeUnitOperation#unit}

---

##### `unitOperationId`<sup>Required</sup> <a name="unitOperationId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unitOperationId"></a>

```typescript
public readonly unitOperationId: string;
```

- *Type:* string

The ID value for the new unit operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#unit_operation_id GoogleSaasRuntimeUnitOperation#unit_operation_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#annotations GoogleSaasRuntimeUnitOperation#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#deletion_policy GoogleSaasRuntimeUnitOperation#deletion_policy}

---

##### `deprovision`<sup>Optional</sup> <a name="deprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.deprovision"></a>

```typescript
public readonly deprovision: GoogleSaasRuntimeUnitOperationDeprovision;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

deprovision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#deprovision GoogleSaasRuntimeUnitOperation#deprovision}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#id GoogleSaasRuntimeUnitOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#labels GoogleSaasRuntimeUnitOperation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#project GoogleSaasRuntimeUnitOperation#project}.

---

##### `provision`<sup>Optional</sup> <a name="provision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provision"></a>

```typescript
public readonly provision: GoogleSaasRuntimeUnitOperationProvision;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

provision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#provision GoogleSaasRuntimeUnitOperation#provision}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSaasRuntimeUnitOperationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#timeouts GoogleSaasRuntimeUnitOperation#timeouts}

---

##### `upgrade`<sup>Optional</sup> <a name="upgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.upgrade"></a>

```typescript
public readonly upgrade: GoogleSaasRuntimeUnitOperationUpgrade;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#upgrade GoogleSaasRuntimeUnitOperation#upgrade}

---

##### `waitForCompletion`<sup>Optional</sup> <a name="waitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.waitForCompletion"></a>

```typescript
public readonly waitForCompletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#wait_for_completion GoogleSaasRuntimeUnitOperation#wait_for_completion}

---

### GoogleSaasRuntimeUnitOperationDeprovision <a name="GoogleSaasRuntimeUnitOperationDeprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitOperationDeprovision: googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision = { ... }
```


### GoogleSaasRuntimeUnitOperationProvision <a name="GoogleSaasRuntimeUnitOperationProvision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitOperationProvision: googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.inputVariables">inputVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.release">release</a></code> | <code>string</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.inputVariables"></a>

```typescript
public readonly inputVariables: IResolvable | GoogleSaasRuntimeUnitOperationProvisionInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#input_variables GoogleSaasRuntimeUnitOperation#input_variables}

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.release"></a>

```typescript
public readonly release: string;
```

- *Type:* string

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#release GoogleSaasRuntimeUnitOperation#release}

---

### GoogleSaasRuntimeUnitOperationProvisionInputVariables <a name="GoogleSaasRuntimeUnitOperationProvisionInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitOperationProvisionInputVariables: googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.variable">variable</a></code> | <code>string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.type">type</a></code> | <code>string</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.value">value</a></code> | <code>string</code> | String encoded value for the variable. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#variable GoogleSaasRuntimeUnitOperation#variable}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#type GoogleSaasRuntimeUnitOperation#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#value GoogleSaasRuntimeUnitOperation#value}

---

### GoogleSaasRuntimeUnitOperationTimeouts <a name="GoogleSaasRuntimeUnitOperationTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitOperationTimeouts: googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#create GoogleSaasRuntimeUnitOperation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#delete GoogleSaasRuntimeUnitOperation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#update GoogleSaasRuntimeUnitOperation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#create GoogleSaasRuntimeUnitOperation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#delete GoogleSaasRuntimeUnitOperation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#update GoogleSaasRuntimeUnitOperation#update}.

---

### GoogleSaasRuntimeUnitOperationUpgrade <a name="GoogleSaasRuntimeUnitOperationUpgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitOperationUpgrade: googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.inputVariables">inputVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.release">release</a></code> | <code>string</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.inputVariables"></a>

```typescript
public readonly inputVariables: IResolvable | GoogleSaasRuntimeUnitOperationUpgradeInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#input_variables GoogleSaasRuntimeUnitOperation#input_variables}

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.release"></a>

```typescript
public readonly release: string;
```

- *Type:* string

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#release GoogleSaasRuntimeUnitOperation#release}

---

### GoogleSaasRuntimeUnitOperationUpgradeInputVariables <a name="GoogleSaasRuntimeUnitOperationUpgradeInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitOperationUpgradeInputVariables: googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.variable">variable</a></code> | <code>string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.type">type</a></code> | <code>string</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.value">value</a></code> | <code>string</code> | String encoded value for the variable. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#variable GoogleSaasRuntimeUnitOperation#variable}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#type GoogleSaasRuntimeUnitOperation#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_unit_operation#value GoogleSaasRuntimeUnitOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeUnitOperationConditionsList <a name="GoogleSaasRuntimeUnitOperationConditionsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.get"></a>

```typescript
public get(index: number): GoogleSaasRuntimeUnitOperationConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleSaasRuntimeUnitOperationConditionsOutputReference <a name="GoogleSaasRuntimeUnitOperationConditionsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions">GoogleSaasRuntimeUnitOperationConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitOperationConditions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions">GoogleSaasRuntimeUnitOperationConditions</a>

---


### GoogleSaasRuntimeUnitOperationDeprovisionOutputReference <a name="GoogleSaasRuntimeUnitOperationDeprovisionOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitOperationDeprovision;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

---


### GoogleSaasRuntimeUnitOperationProvisionInputVariablesList <a name="GoogleSaasRuntimeUnitOperationProvisionInputVariablesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.get"></a>

```typescript
public get(index: number): GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitOperationProvisionInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]

---


### GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference <a name="GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput">variableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitOperationProvisionInputVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>

---


### GoogleSaasRuntimeUnitOperationProvisionOutputReference <a name="GoogleSaasRuntimeUnitOperationProvisionOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetRelease">resetRelease</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.putInputVariables"></a>

```typescript
public putInputVariables(value: IResolvable | GoogleSaasRuntimeUnitOperationProvisionInputVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.putInputVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]

---

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables"></a>

```typescript
public resetInputVariables(): void
```

##### `resetRelease` <a name="resetRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetRelease"></a>

```typescript
public resetRelease(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList">GoogleSaasRuntimeUnitOperationProvisionInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput">inputVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput">releaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.release">release</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables"></a>

```typescript
public readonly inputVariables: GoogleSaasRuntimeUnitOperationProvisionInputVariablesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList">GoogleSaasRuntimeUnitOperationProvisionInputVariablesList</a>

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput"></a>

```typescript
public readonly inputVariablesInput: IResolvable | GoogleSaasRuntimeUnitOperationProvisionInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]

---

##### `releaseInput`<sup>Optional</sup> <a name="releaseInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput"></a>

```typescript
public readonly releaseInput: string;
```

- *Type:* string

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.release"></a>

```typescript
public readonly release: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitOperationProvision;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

---


### GoogleSaasRuntimeUnitOperationTimeoutsOutputReference <a name="GoogleSaasRuntimeUnitOperationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitOperationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

---


### GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList <a name="GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.get"></a>

```typescript
public get(index: number): GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitOperationUpgradeInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]

---


### GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference <a name="GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput">variableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitOperationUpgradeInputVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>

---


### GoogleSaasRuntimeUnitOperationUpgradeOutputReference <a name="GoogleSaasRuntimeUnitOperationUpgradeOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitOperation } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetRelease">resetRelease</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables"></a>

```typescript
public putInputVariables(value: IResolvable | GoogleSaasRuntimeUnitOperationUpgradeInputVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]

---

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables"></a>

```typescript
public resetInputVariables(): void
```

##### `resetRelease` <a name="resetRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetRelease"></a>

```typescript
public resetRelease(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList">GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput">inputVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput">releaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.release">release</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables"></a>

```typescript
public readonly inputVariables: GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList">GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList</a>

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput"></a>

```typescript
public readonly inputVariablesInput: IResolvable | GoogleSaasRuntimeUnitOperationUpgradeInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]

---

##### `releaseInput`<sup>Optional</sup> <a name="releaseInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput"></a>

```typescript
public readonly releaseInput: string;
```

- *Type:* string

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.release"></a>

```typescript
public readonly release: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitOperationUpgrade;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

---



