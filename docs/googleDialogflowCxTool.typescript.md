# `googleDialogflowCxTool` Submodule <a name="`googleDialogflowCxTool` Submodule" id="@cdktn/provider-google-beta.googleDialogflowCxTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxTool <a name="GoogleDialogflowCxTool" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool google_dialogflow_cx_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxTool(scope: Construct, id: string, config: GoogleDialogflowCxToolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig">GoogleDialogflowCxToolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig">GoogleDialogflowCxToolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putConnectorSpec">putConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec">putDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec">putFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec">putOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetConnectorSpec">resetConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetDataStoreSpec">resetDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetFunctionSpec">resetFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOpenApiSpec">resetOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectorSpec` <a name="putConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putConnectorSpec"></a>

```typescript
public putConnectorSpec(value: GoogleDialogflowCxToolConnectorSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putConnectorSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec">GoogleDialogflowCxToolConnectorSpec</a>

---

##### `putDataStoreSpec` <a name="putDataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec"></a>

```typescript
public putDataStoreSpec(value: GoogleDialogflowCxToolDataStoreSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

---

##### `putFunctionSpec` <a name="putFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec"></a>

```typescript
public putFunctionSpec(value: GoogleDialogflowCxToolFunctionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

---

##### `putOpenApiSpec` <a name="putOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec"></a>

```typescript
public putOpenApiSpec(value: GoogleDialogflowCxToolOpenApiSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowCxToolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

---

##### `resetConnectorSpec` <a name="resetConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetConnectorSpec"></a>

```typescript
public resetConnectorSpec(): void
```

##### `resetDataStoreSpec` <a name="resetDataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetDataStoreSpec"></a>

```typescript
public resetDataStoreSpec(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetFunctionSpec` <a name="resetFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetFunctionSpec"></a>

```typescript
public resetFunctionSpec(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpenApiSpec` <a name="resetOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOpenApiSpec"></a>

```typescript
public resetOpenApiSpec(): void
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowCxTool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDialogflowCxTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCxTool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCxTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.connectorSpec">connectorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference">GoogleDialogflowCxToolConnectorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpec">dataStoreSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference">GoogleDialogflowCxToolDataStoreSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference">GoogleDialogflowCxToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference">GoogleDialogflowCxToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference">GoogleDialogflowCxToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.toolType">toolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.connectorSpecInput">connectorSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec">GoogleDialogflowCxToolConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpecInput">dataStoreSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpecInput">functionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpecInput">openApiSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectorSpec`<sup>Required</sup> <a name="connectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.connectorSpec"></a>

```typescript
public readonly connectorSpec: GoogleDialogflowCxToolConnectorSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference">GoogleDialogflowCxToolConnectorSpecOutputReference</a>

---

##### `dataStoreSpec`<sup>Required</sup> <a name="dataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpec"></a>

```typescript
public readonly dataStoreSpec: GoogleDialogflowCxToolDataStoreSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference">GoogleDialogflowCxToolDataStoreSpecOutputReference</a>

---

##### `functionSpec`<sup>Required</sup> <a name="functionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpec"></a>

```typescript
public readonly functionSpec: GoogleDialogflowCxToolFunctionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference">GoogleDialogflowCxToolFunctionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `openApiSpec`<sup>Required</sup> <a name="openApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpec"></a>

```typescript
public readonly openApiSpec: GoogleDialogflowCxToolOpenApiSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference">GoogleDialogflowCxToolOpenApiSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxToolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference">GoogleDialogflowCxToolTimeoutsOutputReference</a>

---

##### `toolType`<sup>Required</sup> <a name="toolType" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.toolType"></a>

```typescript
public readonly toolType: string;
```

- *Type:* string

---

##### `connectorSpecInput`<sup>Optional</sup> <a name="connectorSpecInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.connectorSpecInput"></a>

```typescript
public readonly connectorSpecInput: GoogleDialogflowCxToolConnectorSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec">GoogleDialogflowCxToolConnectorSpec</a>

---

##### `dataStoreSpecInput`<sup>Optional</sup> <a name="dataStoreSpecInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpecInput"></a>

```typescript
public readonly dataStoreSpecInput: GoogleDialogflowCxToolDataStoreSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `functionSpecInput`<sup>Optional</sup> <a name="functionSpecInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpecInput"></a>

```typescript
public readonly functionSpecInput: GoogleDialogflowCxToolFunctionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `openApiSpecInput`<sup>Optional</sup> <a name="openApiSpecInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpecInput"></a>

```typescript
public readonly openApiSpecInput: GoogleDialogflowCxToolOpenApiSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowCxToolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxToolConfig <a name="GoogleDialogflowCxToolConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolConfig: googleDialogflowCxTool.GoogleDialogflowCxToolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.description">description</a></code> | <code>string</code> | High level description of the Tool and its usage. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the tool, unique within the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.connectorSpec">connectorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec">GoogleDialogflowCxToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dataStoreSpec">dataStoreSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | data_store_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.parent">parent</a></code> | <code>string</code> | The agent to create a Tool for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

High level description of the Tool and its usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#description GoogleDialogflowCxTool#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the tool, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#display_name GoogleDialogflowCxTool#display_name}

---

##### `connectorSpec`<sup>Optional</sup> <a name="connectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.connectorSpec"></a>

```typescript
public readonly connectorSpec: GoogleDialogflowCxToolConnectorSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec">GoogleDialogflowCxToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#connector_spec GoogleDialogflowCxTool#connector_spec}

---

##### `dataStoreSpec`<sup>Optional</sup> <a name="dataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dataStoreSpec"></a>

```typescript
public readonly dataStoreSpec: GoogleDialogflowCxToolDataStoreSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

data_store_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#data_store_spec GoogleDialogflowCxTool#data_store_spec}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#deletion_policy GoogleDialogflowCxTool#deletion_policy}

---

##### `functionSpec`<sup>Optional</sup> <a name="functionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.functionSpec"></a>

```typescript
public readonly functionSpec: GoogleDialogflowCxToolFunctionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#function_spec GoogleDialogflowCxTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openApiSpec`<sup>Optional</sup> <a name="openApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.openApiSpec"></a>

```typescript
public readonly openApiSpec: GoogleDialogflowCxToolOpenApiSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#open_api_spec GoogleDialogflowCxTool#open_api_spec}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The agent to create a Tool for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#parent GoogleDialogflowCxTool#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxToolTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#timeouts GoogleDialogflowCxTool#timeouts}

---

### GoogleDialogflowCxToolConnectorSpec <a name="GoogleDialogflowCxToolConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolConnectorSpec: googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec.property.actions">actions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions">GoogleDialogflowCxToolConnectorSpecActions</a>[]</code> | actions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec.property.name">name</a></code> | <code>string</code> | The full resource name of the referenced Integration Connectors Connection. Format: projects/* /locations/* /connections/*. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec.property.endUserAuthConfig">endUserAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig</a></code> | end_user_auth_config block. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec.property.actions"></a>

```typescript
public readonly actions: IResolvable | GoogleDialogflowCxToolConnectorSpecActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions">GoogleDialogflowCxToolConnectorSpecActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#actions GoogleDialogflowCxTool#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The full resource name of the referenced Integration Connectors Connection. Format: projects/* /locations/* /connections/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#name GoogleDialogflowCxTool#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `endUserAuthConfig`<sup>Optional</sup> <a name="endUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec.property.endUserAuthConfig"></a>

```typescript
public readonly endUserAuthConfig: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig</a>

end_user_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#end_user_auth_config GoogleDialogflowCxTool#end_user_auth_config}

---

### GoogleDialogflowCxToolConnectorSpecActions <a name="GoogleDialogflowCxToolConnectorSpecActions" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolConnectorSpecActions: googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions.property.connectionActionId">connectionActionId</a></code> | <code>string</code> | ID of a Connection action for the tool to use. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions.property.entityOperation">entityOperation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolConnectorSpecActionsEntityOperation</a></code> | entity_operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions.property.inputFields">inputFields</a></code> | <code>string[]</code> | Entity fields to use as inputs for the operation. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions.property.outputFields">outputFields</a></code> | <code>string[]</code> | Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. |

---

##### `connectionActionId`<sup>Optional</sup> <a name="connectionActionId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions.property.connectionActionId"></a>

```typescript
public readonly connectionActionId: string;
```

- *Type:* string

ID of a Connection action for the tool to use.

This field is part of a required union field 'action_spec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#connection_action_id GoogleDialogflowCxTool#connection_action_id}

---

##### `entityOperation`<sup>Optional</sup> <a name="entityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions.property.entityOperation"></a>

```typescript
public readonly entityOperation: GoogleDialogflowCxToolConnectorSpecActionsEntityOperation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolConnectorSpecActionsEntityOperation</a>

entity_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#entity_operation GoogleDialogflowCxTool#entity_operation}

---

##### `inputFields`<sup>Optional</sup> <a name="inputFields" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions.property.inputFields"></a>

```typescript
public readonly inputFields: string[];
```

- *Type:* string[]

Entity fields to use as inputs for the operation.

If no fields are specified, all fields of the Entity will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#input_fields GoogleDialogflowCxTool#input_fields}

---

##### `outputFields`<sup>Optional</sup> <a name="outputFields" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions.property.outputFields"></a>

```typescript
public readonly outputFields: string[];
```

- *Type:* string[]

Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#output_fields GoogleDialogflowCxTool#output_fields}

---

### GoogleDialogflowCxToolConnectorSpecActionsEntityOperation <a name="GoogleDialogflowCxToolConnectorSpecActionsEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolConnectorSpecActionsEntityOperation: googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation.property.entityId">entityId</a></code> | <code>string</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation.property.operation">operation</a></code> | <code>string</code> | The operation to perform on the entity. Possible values: ["LIST", "CREATE", "UPDATE", "DELETE", "GET"]. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#entity_id GoogleDialogflowCxTool#entity_id}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

The operation to perform on the entity. Possible values: ["LIST", "CREATE", "UPDATE", "DELETE", "GET"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#operation GoogleDialogflowCxTool#operation}

---

### GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig <a name="GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolConnectorSpecEndUserAuthConfig: googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig.property.oauth2AuthCodeConfig">oauth2AuthCodeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a></code> | oauth2_auth_code_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig.property.oauth2JwtBearerConfig">oauth2JwtBearerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a></code> | oauth2_jwt_bearer_config block. |

---

##### `oauth2AuthCodeConfig`<sup>Optional</sup> <a name="oauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig.property.oauth2AuthCodeConfig"></a>

```typescript
public readonly oauth2AuthCodeConfig: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

oauth2_auth_code_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#oauth2_auth_code_config GoogleDialogflowCxTool#oauth2_auth_code_config}

---

##### `oauth2JwtBearerConfig`<sup>Optional</sup> <a name="oauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig.property.oauth2JwtBearerConfig"></a>

```typescript
public readonly oauth2JwtBearerConfig: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

oauth2_jwt_bearer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#oauth2_jwt_bearer_config GoogleDialogflowCxTool#oauth2_jwt_bearer_config}

---

### GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig <a name="GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig: googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.property.oauthToken">oauthToken</a></code> | <code>string</code> | Oauth token value or parameter name to pass it through. |

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.property.oauthToken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* string

Oauth token value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#oauth_token GoogleDialogflowCxTool#oauth_token}

---

### GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig <a name="GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig: googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.clientKey">clientKey</a></code> | <code>string</code> | Client key value or parameter name to pass it through. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.issuer">issuer</a></code> | <code>string</code> | Issuer value or parameter name to pass it through. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.subject">subject</a></code> | <code>string</code> | Subject value or parameter name to pass it through. |

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

Client key value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#client_key GoogleDialogflowCxTool#client_key}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Issuer value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#issuer GoogleDialogflowCxTool#issuer}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Subject value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#subject GoogleDialogflowCxTool#subject}

---

### GoogleDialogflowCxToolDataStoreSpec <a name="GoogleDialogflowCxToolDataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolDataStoreSpec: googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.dataStoreConnections">dataStoreConnections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>[]</code> | data_store_connections block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.fallbackPrompt">fallbackPrompt</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a></code> | fallback_prompt block. |

---

##### `dataStoreConnections`<sup>Required</sup> <a name="dataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.dataStoreConnections"></a>

```typescript
public readonly dataStoreConnections: IResolvable | GoogleDialogflowCxToolDataStoreSpecDataStoreConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>[]

data_store_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#data_store_connections GoogleDialogflowCxTool#data_store_connections}

---

##### `fallbackPrompt`<sup>Required</sup> <a name="fallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.fallbackPrompt"></a>

```typescript
public readonly fallbackPrompt: GoogleDialogflowCxToolDataStoreSpecFallbackPrompt;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

fallback_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#fallback_prompt GoogleDialogflowCxTool#fallback_prompt}

---

### GoogleDialogflowCxToolDataStoreSpecDataStoreConnections <a name="GoogleDialogflowCxToolDataStoreSpecDataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolDataStoreSpecDataStoreConnections: googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStore">dataStore</a></code> | <code>string</code> | The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStoreType">dataStoreType</a></code> | <code>string</code> | The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.documentProcessingMode">documentProcessingMode</a></code> | <code>string</code> | The document processing mode for the data store connection. |

---

##### `dataStore`<sup>Optional</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStore"></a>

```typescript
public readonly dataStore: string;
```

- *Type:* string

The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#data_store GoogleDialogflowCxTool#data_store}

---

##### `dataStoreType`<sup>Optional</sup> <a name="dataStoreType" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStoreType"></a>

```typescript
public readonly dataStoreType: string;
```

- *Type:* string

The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#data_store_type GoogleDialogflowCxTool#data_store_type}

---

##### `documentProcessingMode`<sup>Optional</sup> <a name="documentProcessingMode" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.documentProcessingMode"></a>

```typescript
public readonly documentProcessingMode: string;
```

- *Type:* string

The document processing mode for the data store connection.

Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
See [DocumentProcessingMode](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#documentprocessingmode) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#document_processing_mode GoogleDialogflowCxTool#document_processing_mode}

---

### GoogleDialogflowCxToolDataStoreSpecFallbackPrompt <a name="GoogleDialogflowCxToolDataStoreSpecFallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolDataStoreSpecFallbackPrompt: googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt = { ... }
```


### GoogleDialogflowCxToolFunctionSpec <a name="GoogleDialogflowCxToolFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolFunctionSpec: googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.inputSchema">inputSchema</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.outputSchema">outputSchema</a></code> | <code>string</code> | Optional. |

---

##### `inputSchema`<sup>Optional</sup> <a name="inputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.inputSchema"></a>

```typescript
public readonly inputSchema: string;
```

- *Type:* string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#input_schema GoogleDialogflowCxTool#input_schema}

---

##### `outputSchema`<sup>Optional</sup> <a name="outputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.outputSchema"></a>

```typescript
public readonly outputSchema: string;
```

- *Type:* string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#output_schema GoogleDialogflowCxTool#output_schema}

---

### GoogleDialogflowCxToolOpenApiSpec <a name="GoogleDialogflowCxToolOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolOpenApiSpec: googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.textSchema">textSchema</a></code> | <code>string</code> | The OpenAPI schema specified as a text. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.textSchema"></a>

```typescript
public readonly textSchema: string;
```

- *Type:* string

The OpenAPI schema specified as a text.

This field is part of a union field 'schema': only one of 'textSchema' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#text_schema GoogleDialogflowCxTool#text_schema}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.authentication"></a>

```typescript
public readonly authentication: GoogleDialogflowCxToolOpenApiSpecAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#authentication GoogleDialogflowCxTool#authentication}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#service_directory_config GoogleDialogflowCxTool#service_directory_config}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: GoogleDialogflowCxToolOpenApiSpecTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#tls_config GoogleDialogflowCxTool#tls_config}

---

### GoogleDialogflowCxToolOpenApiSpecAuthentication <a name="GoogleDialogflowCxToolOpenApiSpecAuthentication" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolOpenApiSpecAuthentication: googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#api_key_config GoogleDialogflowCxTool#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#bearer_token_config GoogleDialogflowCxTool#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#oauth_config GoogleDialogflowCxTool#oauth_config}

---

##### `serviceAgentAuthConfig`<sup>Optional</sup> <a name="serviceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```typescript
public readonly serviceAgentAuthConfig: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#service_agent_auth_config GoogleDialogflowCxTool#service_agent_auth_config}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig: googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>string</code> | Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">apiKey</a></code> | <code>string</code> | Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>string</code> | Optional. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#key_name GoogleDialogflowCxTool#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#request_location GoogleDialogflowCxTool#request_location}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#api_key GoogleDialogflowCxTool#api_key}

---

##### `secretVersionForApiKey`<sup>Optional</sup> <a name="secretVersionForApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```typescript
public readonly secretVersionForApiKey: string;
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the apiKey field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_api_key GoogleDialogflowCxTool#secret_version_for_api_key}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig: googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">secretVersionForToken</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>string</code> | Optional. |

---

##### `secretVersionForToken`<sup>Optional</sup> <a name="secretVersionForToken" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```typescript
public readonly secretVersionForToken: string;
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_token GoogleDialogflowCxTool#secret_version_for_token}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Optional.

The text token appended to the text Bearer to the request Authorization header.
[Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#token GoogleDialogflowCxTool#token}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig: googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>string</code> | Optional. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#client_id GoogleDialogflowCxTool#client_id}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#oauth_grant_type GoogleDialogflowCxTool#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#token_endpoint GoogleDialogflowCxTool#token_endpoint}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#client_secret GoogleDialogflowCxTool#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#scopes GoogleDialogflowCxTool#scopes}

---

##### `secretVersionForClientSecret`<sup>Optional</sup> <a name="secretVersionForClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```typescript
public readonly secretVersionForClientSecret: string;
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the clientSecret field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_client_secret GoogleDialogflowCxTool#secret_version_for_client_secret}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig: googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>string</code> | Optional. |

---

##### `serviceAgentAuth`<sup>Optional</sup> <a name="serviceAgentAuth" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```typescript
public readonly serviceAgentAuth: string;
```

- *Type:* string

Optional.

Indicate the auth token type generated from the Diglogflow service agent.
The generated token is sent in the Authorization header.
See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#service_agent_auth GoogleDialogflowCxTool#service_agent_auth}

---

### GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig <a name="GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolOpenApiSpecServiceDirectoryConfig: googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#service GoogleDialogflowCxTool#service}

---

### GoogleDialogflowCxToolOpenApiSpecTlsConfig <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolOpenApiSpecTlsConfig: googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig.property.caCerts">caCerts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | ca_certs block. |

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig.property.caCerts"></a>

```typescript
public readonly caCerts: IResolvable | GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>[]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#ca_certs GoogleDialogflowCxTool#ca_certs}

---

### GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolOpenApiSpecTlsConfigCaCerts: googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.cert">cert</a></code> | <code>string</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.displayName">displayName</a></code> | <code>string</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
For instance a certificate can be self-signed using the following command:
```
  openssl x509 -req -days 200 -in example.com.csr \
    -signkey example.com.key \
    -out example.com.crt \
    -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
```
A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#cert GoogleDialogflowCxTool#cert}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#display_name GoogleDialogflowCxTool#display_name}

---

### GoogleDialogflowCxToolTimeouts <a name="GoogleDialogflowCxToolTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

const googleDialogflowCxToolTimeouts: googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#create GoogleDialogflowCxTool#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#delete GoogleDialogflowCxTool#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#update GoogleDialogflowCxTool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#create GoogleDialogflowCxTool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#delete GoogleDialogflowCxTool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_cx_tool#update GoogleDialogflowCxTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference <a name="GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolConnectorSpecActionsEntityOperation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolConnectorSpecActionsEntityOperation</a>

---


### GoogleDialogflowCxToolConnectorSpecActionsList <a name="GoogleDialogflowCxToolConnectorSpecActionsList" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCxToolConnectorSpecActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions">GoogleDialogflowCxToolConnectorSpecActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxToolConnectorSpecActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions">GoogleDialogflowCxToolConnectorSpecActions</a>[]

---


### GoogleDialogflowCxToolConnectorSpecActionsOutputReference <a name="GoogleDialogflowCxToolConnectorSpecActionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.putEntityOperation">putEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.resetConnectionActionId">resetConnectionActionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.resetEntityOperation">resetEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.resetInputFields">resetInputFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.resetOutputFields">resetOutputFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityOperation` <a name="putEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.putEntityOperation"></a>

```typescript
public putEntityOperation(value: GoogleDialogflowCxToolConnectorSpecActionsEntityOperation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolConnectorSpecActionsEntityOperation</a>

---

##### `resetConnectionActionId` <a name="resetConnectionActionId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.resetConnectionActionId"></a>

```typescript
public resetConnectionActionId(): void
```

##### `resetEntityOperation` <a name="resetEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.resetEntityOperation"></a>

```typescript
public resetEntityOperation(): void
```

##### `resetInputFields` <a name="resetInputFields" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.resetInputFields"></a>

```typescript
public resetInputFields(): void
```

##### `resetOutputFields` <a name="resetOutputFields" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.resetOutputFields"></a>

```typescript
public resetOutputFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.entityOperation">entityOperation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference">GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.connectionActionIdInput">connectionActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.entityOperationInput">entityOperationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.inputFieldsInput">inputFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.outputFieldsInput">outputFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.connectionActionId">connectionActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.inputFields">inputFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.outputFields">outputFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions">GoogleDialogflowCxToolConnectorSpecActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityOperation`<sup>Required</sup> <a name="entityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.entityOperation"></a>

```typescript
public readonly entityOperation: GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference">GoogleDialogflowCxToolConnectorSpecActionsEntityOperationOutputReference</a>

---

##### `connectionActionIdInput`<sup>Optional</sup> <a name="connectionActionIdInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.connectionActionIdInput"></a>

```typescript
public readonly connectionActionIdInput: string;
```

- *Type:* string

---

##### `entityOperationInput`<sup>Optional</sup> <a name="entityOperationInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.entityOperationInput"></a>

```typescript
public readonly entityOperationInput: GoogleDialogflowCxToolConnectorSpecActionsEntityOperation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolConnectorSpecActionsEntityOperation</a>

---

##### `inputFieldsInput`<sup>Optional</sup> <a name="inputFieldsInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.inputFieldsInput"></a>

```typescript
public readonly inputFieldsInput: string[];
```

- *Type:* string[]

---

##### `outputFieldsInput`<sup>Optional</sup> <a name="outputFieldsInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.outputFieldsInput"></a>

```typescript
public readonly outputFieldsInput: string[];
```

- *Type:* string[]

---

##### `connectionActionId`<sup>Required</sup> <a name="connectionActionId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.connectionActionId"></a>

```typescript
public readonly connectionActionId: string;
```

- *Type:* string

---

##### `inputFields`<sup>Required</sup> <a name="inputFields" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.inputFields"></a>

```typescript
public readonly inputFields: string[];
```

- *Type:* string[]

---

##### `outputFields`<sup>Required</sup> <a name="outputFields" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.outputFields"></a>

```typescript
public readonly outputFields: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxToolConnectorSpecActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions">GoogleDialogflowCxToolConnectorSpecActions</a>

---


### GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference <a name="GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthTokenInput">oauthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthToken">oauthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthTokenInput"></a>

```typescript
public readonly oauthTokenInput: string;
```

- *Type:* string

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthToken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

---


### GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference <a name="GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

---


### GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference <a name="GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2AuthCodeConfig">putOauth2AuthCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig">putOauth2JwtBearerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2AuthCodeConfig">resetOauth2AuthCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2JwtBearerConfig">resetOauth2JwtBearerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauth2AuthCodeConfig` <a name="putOauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2AuthCodeConfig"></a>

```typescript
public putOauth2AuthCodeConfig(value: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2AuthCodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

---

##### `putOauth2JwtBearerConfig` <a name="putOauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig"></a>

```typescript
public putOauth2JwtBearerConfig(value: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

---

##### `resetOauth2AuthCodeConfig` <a name="resetOauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2AuthCodeConfig"></a>

```typescript
public resetOauth2AuthCodeConfig(): void
```

##### `resetOauth2JwtBearerConfig` <a name="resetOauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2JwtBearerConfig"></a>

```typescript
public resetOauth2JwtBearerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfig">oauth2AuthCodeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfig">oauth2JwtBearerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfigInput">oauth2AuthCodeConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfigInput">oauth2JwtBearerConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauth2AuthCodeConfig`<sup>Required</sup> <a name="oauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfig"></a>

```typescript
public readonly oauth2AuthCodeConfig: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference</a>

---

##### `oauth2JwtBearerConfig`<sup>Required</sup> <a name="oauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfig"></a>

```typescript
public readonly oauth2JwtBearerConfig: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference</a>

---

##### `oauth2AuthCodeConfigInput`<sup>Optional</sup> <a name="oauth2AuthCodeConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfigInput"></a>

```typescript
public readonly oauth2AuthCodeConfigInput: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

---

##### `oauth2JwtBearerConfigInput`<sup>Optional</sup> <a name="oauth2JwtBearerConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfigInput"></a>

```typescript
public readonly oauth2JwtBearerConfigInput: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig</a>

---


### GoogleDialogflowCxToolConnectorSpecOutputReference <a name="GoogleDialogflowCxToolConnectorSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.putEndUserAuthConfig">putEndUserAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.resetEndUserAuthConfig">resetEndUserAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.putActions"></a>

```typescript
public putActions(value: IResolvable | GoogleDialogflowCxToolConnectorSpecActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions">GoogleDialogflowCxToolConnectorSpecActions</a>[]

---

##### `putEndUserAuthConfig` <a name="putEndUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.putEndUserAuthConfig"></a>

```typescript
public putEndUserAuthConfig(value: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.putEndUserAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig</a>

---

##### `resetEndUserAuthConfig` <a name="resetEndUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.resetEndUserAuthConfig"></a>

```typescript
public resetEndUserAuthConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList">GoogleDialogflowCxToolConnectorSpecActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.endUserAuthConfig">endUserAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions">GoogleDialogflowCxToolConnectorSpecActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.endUserAuthConfigInput">endUserAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec">GoogleDialogflowCxToolConnectorSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.actions"></a>

```typescript
public readonly actions: GoogleDialogflowCxToolConnectorSpecActionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActionsList">GoogleDialogflowCxToolConnectorSpecActionsList</a>

---

##### `endUserAuthConfig`<sup>Required</sup> <a name="endUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.endUserAuthConfig"></a>

```typescript
public readonly endUserAuthConfig: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfigOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | GoogleDialogflowCxToolConnectorSpecActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecActions">GoogleDialogflowCxToolConnectorSpecActions</a>[]

---

##### `endUserAuthConfigInput`<sup>Optional</sup> <a name="endUserAuthConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.endUserAuthConfigInput"></a>

```typescript
public readonly endUserAuthConfigInput: GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolConnectorSpecEndUserAuthConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolConnectorSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConnectorSpec">GoogleDialogflowCxToolConnectorSpec</a>

---


### GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList <a name="GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxToolDataStoreSpecDataStoreConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>[]

---


### GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference <a name="GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore">resetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType">resetDataStoreType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode">resetDocumentProcessingMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataStore` <a name="resetDataStore" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore"></a>

```typescript
public resetDataStore(): void
```

##### `resetDataStoreType` <a name="resetDataStoreType" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType"></a>

```typescript
public resetDataStoreType(): void
```

##### `resetDocumentProcessingMode` <a name="resetDocumentProcessingMode" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode"></a>

```typescript
public resetDocumentProcessingMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput">dataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput">documentProcessingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore">dataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType">dataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode">documentProcessingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput"></a>

```typescript
public readonly dataStoreInput: string;
```

- *Type:* string

---

##### `dataStoreTypeInput`<sup>Optional</sup> <a name="dataStoreTypeInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput"></a>

```typescript
public readonly dataStoreTypeInput: string;
```

- *Type:* string

---

##### `documentProcessingModeInput`<sup>Optional</sup> <a name="documentProcessingModeInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput"></a>

```typescript
public readonly documentProcessingModeInput: string;
```

- *Type:* string

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore"></a>

```typescript
public readonly dataStore: string;
```

- *Type:* string

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType"></a>

```typescript
public readonly dataStoreType: string;
```

- *Type:* string

---

##### `documentProcessingMode`<sup>Required</sup> <a name="documentProcessingMode" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode"></a>

```typescript
public readonly documentProcessingMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxToolDataStoreSpecDataStoreConnections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>

---


### GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference <a name="GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolDataStoreSpecFallbackPrompt;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

---


### GoogleDialogflowCxToolDataStoreSpecOutputReference <a name="GoogleDialogflowCxToolDataStoreSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putDataStoreConnections">putDataStoreConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putFallbackPrompt">putFallbackPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataStoreConnections` <a name="putDataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putDataStoreConnections"></a>

```typescript
public putDataStoreConnections(value: IResolvable | GoogleDialogflowCxToolDataStoreSpecDataStoreConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putDataStoreConnections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>[]

---

##### `putFallbackPrompt` <a name="putFallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putFallbackPrompt"></a>

```typescript
public putFallbackPrompt(value: GoogleDialogflowCxToolDataStoreSpecFallbackPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putFallbackPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnections">dataStoreConnections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPrompt">fallbackPrompt</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput">dataStoreConnectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPromptInput">fallbackPromptInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreConnections`<sup>Required</sup> <a name="dataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnections"></a>

```typescript
public readonly dataStoreConnections: GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList</a>

---

##### `fallbackPrompt`<sup>Required</sup> <a name="fallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPrompt"></a>

```typescript
public readonly fallbackPrompt: GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference</a>

---

##### `dataStoreConnectionsInput`<sup>Optional</sup> <a name="dataStoreConnectionsInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput"></a>

```typescript
public readonly dataStoreConnectionsInput: IResolvable | GoogleDialogflowCxToolDataStoreSpecDataStoreConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>[]

---

##### `fallbackPromptInput`<sup>Optional</sup> <a name="fallbackPromptInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPromptInput"></a>

```typescript
public readonly fallbackPromptInput: GoogleDialogflowCxToolDataStoreSpecFallbackPrompt;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolDataStoreSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

---


### GoogleDialogflowCxToolFunctionSpecOutputReference <a name="GoogleDialogflowCxToolFunctionSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetInputSchema">resetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetOutputSchema">resetOutputSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputSchema` <a name="resetInputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetInputSchema"></a>

```typescript
public resetInputSchema(): void
```

##### `resetOutputSchema` <a name="resetOutputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetOutputSchema"></a>

```typescript
public resetOutputSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchemaInput">inputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchemaInput">outputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchema">inputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchema">outputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputSchemaInput`<sup>Optional</sup> <a name="inputSchemaInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```typescript
public readonly inputSchemaInput: string;
```

- *Type:* string

---

##### `outputSchemaInput`<sup>Optional</sup> <a name="outputSchemaInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```typescript
public readonly outputSchemaInput: string;
```

- *Type:* string

---

##### `inputSchema`<sup>Required</sup> <a name="inputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchema"></a>

```typescript
public readonly inputSchema: string;
```

- *Type:* string

---

##### `outputSchema`<sup>Required</sup> <a name="outputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchema"></a>

```typescript
public readonly outputSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolFunctionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">resetSecretVersionForApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetSecretVersionForApiKey` <a name="resetSecretVersionForApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```typescript
public resetSecretVersionForApiKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">secretVersionForApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```typescript
public readonly requestLocationInput: string;
```

- *Type:* string

---

##### `secretVersionForApiKeyInput`<sup>Optional</sup> <a name="secretVersionForApiKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```typescript
public readonly secretVersionForApiKeyInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

---

##### `secretVersionForApiKey`<sup>Required</sup> <a name="secretVersionForApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```typescript
public readonly secretVersionForApiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">resetSecretVersionForToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretVersionForToken` <a name="resetSecretVersionForToken" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```typescript
public resetSecretVersionForToken(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">secretVersionForTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">secretVersionForToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretVersionForTokenInput`<sup>Optional</sup> <a name="secretVersionForTokenInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```typescript
public readonly secretVersionForTokenInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `secretVersionForToken`<sup>Required</sup> <a name="secretVersionForToken" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```typescript
public readonly secretVersionForToken: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">resetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSecretVersionForClientSecret` <a name="resetSecretVersionForClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```typescript
public resetSecretVersionForClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">secretVersionForClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```typescript
public readonly oauthGrantTypeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `secretVersionForClientSecretInput`<sup>Optional</sup> <a name="secretVersionForClientSecretInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```typescript
public readonly secretVersionForClientSecretInput: string;
```

- *Type:* string

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `secretVersionForClientSecret`<sup>Required</sup> <a name="secretVersionForClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```typescript
public readonly secretVersionForClientSecret: string;
```

- *Type:* string

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">putServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">resetServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```typescript
public putApiKeyConfig(value: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```typescript
public putBearerTokenConfig(value: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```typescript
public putOauthConfig(value: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `putServiceAgentAuthConfig` <a name="putServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```typescript
public putServiceAgentAuthConfig(value: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```typescript
public resetApiKeyConfig(): void
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```typescript
public resetBearerTokenConfig(): void
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```typescript
public resetOauthConfig(): void
```

##### `resetServiceAgentAuthConfig` <a name="resetServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```typescript
public resetServiceAgentAuthConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">serviceAgentAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAgentAuthConfig`<sup>Required</sup> <a name="serviceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```typescript
public readonly serviceAgentAuthConfig: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```typescript
public readonly apiKeyConfigInput: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```typescript
public readonly bearerTokenConfigInput: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```typescript
public readonly oauthConfigInput: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `serviceAgentAuthConfigInput`<sup>Optional</sup> <a name="serviceAgentAuthConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```typescript
public readonly serviceAgentAuthConfigInput: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolOpenApiSpecAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">resetServiceAgentAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAgentAuth` <a name="resetServiceAgentAuth" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```typescript
public resetServiceAgentAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">serviceAgentAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAgentAuthInput`<sup>Optional</sup> <a name="serviceAgentAuthInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```typescript
public readonly serviceAgentAuthInput: string;
```

- *Type:* string

---

##### `serviceAgentAuth`<sup>Required</sup> <a name="serviceAgentAuth" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```typescript
public readonly serviceAgentAuth: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication"></a>

```typescript
public putAuthentication(value: GoogleDialogflowCxToolOpenApiSpecAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putTlsConfig"></a>

```typescript
public putTlsConfig(value: GoogleDialogflowCxToolOpenApiSpecTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchemaInput">textSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchema">textSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authentication"></a>

```typescript
public readonly authentication: GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: GoogleDialogflowCxToolOpenApiSpecAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `textSchemaInput`<sup>Optional</sup> <a name="textSchemaInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```typescript
public readonly textSchemaInput: string;
```

- *Type:* string

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: GoogleDialogflowCxToolOpenApiSpecTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchema"></a>

```typescript
public readonly textSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolOpenApiSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

---


### GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>[]

---


### GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">certInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```typescript
public readonly certInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>

---


### GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.putCaCerts">putCaCerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaCerts` <a name="putCaCerts" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```typescript
public putCaCerts(value: IResolvable | GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">caCertsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```typescript
public readonly caCerts: GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `caCertsInput`<sup>Optional</sup> <a name="caCertsInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```typescript
public readonly caCertsInput: IResolvable | GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxToolOpenApiSpecTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

---


### GoogleDialogflowCxToolTimeoutsOutputReference <a name="GoogleDialogflowCxToolTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxTool } from '@cdktn/provider-google-beta'

new googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxToolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

---



