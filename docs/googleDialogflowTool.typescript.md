# `googleDialogflowTool` Submodule <a name="`googleDialogflowTool` Submodule" id="@cdktn/provider-google-beta.googleDialogflowTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowTool <a name="GoogleDialogflowTool" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool google_dialogflow_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowTool(scope: Construct, id: string, config: GoogleDialogflowToolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig">GoogleDialogflowToolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig">GoogleDialogflowToolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putConnectorSpec">putConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putFunctionSpec">putFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putOpenApiSpec">putOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetActionConfirmationRequirement">resetActionConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetConnectorSpec">resetConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetFunctionSpec">resetFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetOpenApiSpec">resetOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectorSpec` <a name="putConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putConnectorSpec"></a>

```typescript
public putConnectorSpec(value: GoogleDialogflowToolConnectorSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putConnectorSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a>

---

##### `putFunctionSpec` <a name="putFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putFunctionSpec"></a>

```typescript
public putFunctionSpec(value: GoogleDialogflowToolFunctionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putFunctionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a>

---

##### `putOpenApiSpec` <a name="putOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putOpenApiSpec"></a>

```typescript
public putOpenApiSpec(value: GoogleDialogflowToolOpenApiSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putOpenApiSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowToolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a>

---

##### `resetActionConfirmationRequirement` <a name="resetActionConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetActionConfirmationRequirement"></a>

```typescript
public resetActionConfirmationRequirement(): void
```

##### `resetConnectorSpec` <a name="resetConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetConnectorSpec"></a>

```typescript
public resetConnectorSpec(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFunctionSpec` <a name="resetFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetFunctionSpec"></a>

```typescript
public resetFunctionSpec(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpenApiSpec` <a name="resetOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetOpenApiSpec"></a>

```typescript
public resetOpenApiSpec(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetToolId"></a>

```typescript
public resetToolId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowTool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isConstruct"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

googleDialogflowTool.GoogleDialogflowTool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isTerraformElement"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

googleDialogflowTool.GoogleDialogflowTool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isTerraformResource"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

googleDialogflowTool.GoogleDialogflowTool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDialogflowTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowTool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.connectorSpec">connectorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference">GoogleDialogflowToolConnectorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference">GoogleDialogflowToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference">GoogleDialogflowToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.satisfiesPzi">satisfiesPzi</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.satisfiesPzs">satisfiesPzs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference">GoogleDialogflowToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.actionConfirmationRequirementInput">actionConfirmationRequirementInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.connectorSpecInput">connectorSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.functionSpecInput">functionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.openApiSpecInput">openApiSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolKeyInput">toolKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.actionConfirmationRequirement">actionConfirmationRequirement</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolKey">toolKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectorSpec`<sup>Required</sup> <a name="connectorSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.connectorSpec"></a>

```typescript
public readonly connectorSpec: GoogleDialogflowToolConnectorSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference">GoogleDialogflowToolConnectorSpecOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `functionSpec`<sup>Required</sup> <a name="functionSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.functionSpec"></a>

```typescript
public readonly functionSpec: GoogleDialogflowToolFunctionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference">GoogleDialogflowToolFunctionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `openApiSpec`<sup>Required</sup> <a name="openApiSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.openApiSpec"></a>

```typescript
public readonly openApiSpec: GoogleDialogflowToolOpenApiSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference">GoogleDialogflowToolOpenApiSpecOutputReference</a>

---

##### `satisfiesPzi`<sup>Required</sup> <a name="satisfiesPzi" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.satisfiesPzi"></a>

```typescript
public readonly satisfiesPzi: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `satisfiesPzs`<sup>Required</sup> <a name="satisfiesPzs" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.satisfiesPzs"></a>

```typescript
public readonly satisfiesPzs: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowToolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference">GoogleDialogflowToolTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actionConfirmationRequirementInput`<sup>Optional</sup> <a name="actionConfirmationRequirementInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.actionConfirmationRequirementInput"></a>

```typescript
public readonly actionConfirmationRequirementInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectorSpecInput`<sup>Optional</sup> <a name="connectorSpecInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.connectorSpecInput"></a>

```typescript
public readonly connectorSpecInput: GoogleDialogflowToolConnectorSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `functionSpecInput`<sup>Optional</sup> <a name="functionSpecInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.functionSpecInput"></a>

```typescript
public readonly functionSpecInput: GoogleDialogflowToolFunctionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `openApiSpecInput`<sup>Optional</sup> <a name="openApiSpecInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.openApiSpecInput"></a>

```typescript
public readonly openApiSpecInput: GoogleDialogflowToolOpenApiSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowToolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a>

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolKeyInput`<sup>Optional</sup> <a name="toolKeyInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolKeyInput"></a>

```typescript
public readonly toolKeyInput: string;
```

- *Type:* string

---

##### `actionConfirmationRequirement`<sup>Required</sup> <a name="actionConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.actionConfirmationRequirement"></a>

```typescript
public readonly actionConfirmationRequirement: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolKey`<sup>Required</sup> <a name="toolKey" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolKey"></a>

```typescript
public readonly toolKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowToolConfig <a name="GoogleDialogflowToolConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolConfig: googleDialogflowTool.GoogleDialogflowToolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.location">location</a></code> | <code>string</code> | The location of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.toolKey">toolKey</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.actionConfirmationRequirement">actionConfirmationRequirement</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.connectorSpec">connectorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.description">description</a></code> | <code>string</code> | Optional. Human readable description of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.displayName">displayName</a></code> | <code>string</code> | Optional. The human-readable name of the tool, unique within the project and location. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#id GoogleDialogflowTool#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#project GoogleDialogflowTool#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.toolId">toolId</a></code> | <code>string</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#location GoogleDialogflowTool#location}

---

##### `toolKey`<sup>Required</sup> <a name="toolKey" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.toolKey"></a>

```typescript
public readonly toolKey: string;
```

- *Type:* string

Required.

A human readable short name of the tool, which should be unique within the project. It should only contain letters, numbers, and underscores, and it will be used by LLM to identify the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#tool_key GoogleDialogflowTool#tool_key}

---

##### `actionConfirmationRequirement`<sup>Optional</sup> <a name="actionConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.actionConfirmationRequirement"></a>

```typescript
public readonly actionConfirmationRequirement: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Confirmation requirement for the actions. Each key is an action name in the 'action_schemas'.
If an action's confirmation requirement is not specified (either the key is not present, or its value is 'CONFIRMATION_REQUIREMENT_UNSPECIFIED'), a default value will be populated depending on the action's method type: GET actions default to 'NOT_REQUIRED', and other actions default to 'REQUIRED'.
Valid values are 'REQUIRED' and 'NOT_REQUIRED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#action_confirmation_requirement GoogleDialogflowTool#action_confirmation_requirement}

---

##### `connectorSpec`<sup>Optional</sup> <a name="connectorSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.connectorSpec"></a>

```typescript
public readonly connectorSpec: GoogleDialogflowToolConnectorSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#connector_spec GoogleDialogflowTool#connector_spec}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#deletion_policy GoogleDialogflowTool#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Human readable description of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#description GoogleDialogflowTool#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. The human-readable name of the tool, unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#display_name GoogleDialogflowTool#display_name}

---

##### `functionSpec`<sup>Optional</sup> <a name="functionSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.functionSpec"></a>

```typescript
public readonly functionSpec: GoogleDialogflowToolFunctionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#function_spec GoogleDialogflowTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#id GoogleDialogflowTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openApiSpec`<sup>Optional</sup> <a name="openApiSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.openApiSpec"></a>

```typescript
public readonly openApiSpec: GoogleDialogflowToolOpenApiSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#open_api_spec GoogleDialogflowTool#open_api_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#project GoogleDialogflowTool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowToolTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#timeouts GoogleDialogflowTool#timeouts}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

Optional.

The ID to use for the tool, which will become the final component of the tool's resource name.
The tool ID must be compliant with the regression formula '[a-zA-Z][a-zA-Z0-9_-]*' with the characters length in range of [3,64].
If the field is not provided, an Id will be auto-generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#tool_id GoogleDialogflowTool#tool_id}

---

### GoogleDialogflowToolConnectorSpec <a name="GoogleDialogflowToolConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolConnectorSpec: googleDialogflowTool.GoogleDialogflowToolConnectorSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec.property.actions">actions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>[]</code> | actions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec.property.name">name</a></code> | <code>string</code> | The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec.property.actions"></a>

```typescript
public readonly actions: IResolvable | GoogleDialogflowToolConnectorSpecActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#actions GoogleDialogflowTool#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#name GoogleDialogflowTool#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDialogflowToolConnectorSpecActions <a name="GoogleDialogflowToolConnectorSpecActions" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolConnectorSpecActions: googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.connectionActionId">connectionActionId</a></code> | <code>string</code> | ID of a Connection action for the tool to use. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.entityOperation">entityOperation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a></code> | entity_operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.inputFields">inputFields</a></code> | <code>string[]</code> | Entity fields to use as inputs for the operation. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.outputFields">outputFields</a></code> | <code>string[]</code> | Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. |

---

##### `connectionActionId`<sup>Optional</sup> <a name="connectionActionId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.connectionActionId"></a>

```typescript
public readonly connectionActionId: string;
```

- *Type:* string

ID of a Connection action for the tool to use.

This field is part of a required union field 'action_spec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#connection_action_id GoogleDialogflowTool#connection_action_id}

---

##### `entityOperation`<sup>Optional</sup> <a name="entityOperation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.entityOperation"></a>

```typescript
public readonly entityOperation: GoogleDialogflowToolConnectorSpecActionsEntityOperation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a>

entity_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#entity_operation GoogleDialogflowTool#entity_operation}

---

##### `inputFields`<sup>Optional</sup> <a name="inputFields" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.inputFields"></a>

```typescript
public readonly inputFields: string[];
```

- *Type:* string[]

Entity fields to use as inputs for the operation.

If no fields are specified, all fields of the Entity will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#input_fields GoogleDialogflowTool#input_fields}

---

##### `outputFields`<sup>Optional</sup> <a name="outputFields" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.outputFields"></a>

```typescript
public readonly outputFields: string[];
```

- *Type:* string[]

Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#output_fields GoogleDialogflowTool#output_fields}

---

### GoogleDialogflowToolConnectorSpecActionsEntityOperation <a name="GoogleDialogflowToolConnectorSpecActionsEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolConnectorSpecActionsEntityOperation: googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation.property.entityId">entityId</a></code> | <code>string</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation.property.operation">operation</a></code> | <code>string</code> | The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"]. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#entity_id GoogleDialogflowTool#entity_id}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#operation GoogleDialogflowTool#operation}

---

### GoogleDialogflowToolFunctionSpec <a name="GoogleDialogflowToolFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolFunctionSpec: googleDialogflowTool.GoogleDialogflowToolFunctionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.property.inputSchema">inputSchema</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.property.methodType">methodType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.property.outputSchema">outputSchema</a></code> | <code>string</code> | Optional. |

---

##### `inputSchema`<sup>Optional</sup> <a name="inputSchema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.property.inputSchema"></a>

```typescript
public readonly inputSchema: string;
```

- *Type:* string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#input_schema GoogleDialogflowTool#input_schema}

---

##### `methodType`<sup>Optional</sup> <a name="methodType" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.property.methodType"></a>

```typescript
public readonly methodType: string;
```

- *Type:* string

Optional.

The method type of the function. If not specified, the default value is GET. Possible values: ["GET", "POST", "PUT", "DELETE", "PATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#method_type GoogleDialogflowTool#method_type}

---

##### `outputSchema`<sup>Optional</sup> <a name="outputSchema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.property.outputSchema"></a>

```typescript
public readonly outputSchema: string;
```

- *Type:* string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#output_schema GoogleDialogflowTool#output_schema}

---

### GoogleDialogflowToolOpenApiSpec <a name="GoogleDialogflowToolOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolOpenApiSpec: googleDialogflowTool.GoogleDialogflowToolOpenApiSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.textSchema">textSchema</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.textSchema"></a>

```typescript
public readonly textSchema: string;
```

- *Type:* string

Required.

The OpenAPI schema specified as a text.
Note: Plays a role in linking the OpenAPI spec with the tool. The 'info.title' field in the OpenAPI schema must match the 'toolKey' of the tool, otherwise the API will overwrite 'info.title' with 'toolKey'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#text_schema GoogleDialogflowTool#text_schema}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.authentication"></a>

```typescript
public readonly authentication: GoogleDialogflowToolOpenApiSpecAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#authentication GoogleDialogflowTool#authentication}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service_directory_config GoogleDialogflowTool#service_directory_config}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: GoogleDialogflowToolOpenApiSpecTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#tls_config GoogleDialogflowTool#tls_config}

---

### GoogleDialogflowToolOpenApiSpecAuthentication <a name="GoogleDialogflowToolOpenApiSpecAuthentication" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolOpenApiSpecAuthentication: googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#api_key_config GoogleDialogflowTool#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#bearer_token_config GoogleDialogflowTool#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#oauth_config GoogleDialogflowTool#oauth_config}

---

##### `serviceAgentAuthConfig`<sup>Optional</sup> <a name="serviceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```typescript
public readonly serviceAgentAuthConfig: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service_agent_auth_config GoogleDialogflowTool#service_agent_auth_config}

---

### GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig <a name="GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig: googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>string</code> | Key location in the request. Possible values: ["HEADER", "QUERY_STRING"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">apiKey</a></code> | <code>string</code> | Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>string</code> | Optional. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#key_name GoogleDialogflowTool#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

Key location in the request. Possible values: ["HEADER", "QUERY_STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#request_location GoogleDialogflowTool#request_location}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#api_key GoogleDialogflowTool#api_key}

---

##### `secretVersionForApiKey`<sup>Optional</sup> <a name="secretVersionForApiKey" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```typescript
public readonly secretVersionForApiKey: string;
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the 'apiKey' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#secret_version_for_api_key GoogleDialogflowTool#secret_version_for_api_key}

---

### GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig <a name="GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig: googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">secretVersionForToken</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>string</code> | Optional. The text token appended to the text 'Bearer' to the request Authorization header. |

---

##### `secretVersionForToken`<sup>Optional</sup> <a name="secretVersionForToken" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```typescript
public readonly secretVersionForToken: string;
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the Bearer token.
If this field is set, the 'token' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#secret_version_for_token GoogleDialogflowTool#secret_version_for_token}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Optional. The text token appended to the text 'Bearer' to the request Authorization header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#token GoogleDialogflowTool#token}

---

### GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig <a name="GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolOpenApiSpecAuthenticationOauthConfig: googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>string</code> | Optional. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#client_id GoogleDialogflowTool#client_id}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#oauth_grant_type GoogleDialogflowTool#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#token_endpoint GoogleDialogflowTool#token_endpoint}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#client_secret GoogleDialogflowTool#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#scopes GoogleDialogflowTool#scopes}

---

##### `secretVersionForClientSecret`<sup>Optional</sup> <a name="secretVersionForClientSecret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```typescript
public readonly secretVersionForClientSecret: string;
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the 'clientSecret' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#secret_version_for_client_secret GoogleDialogflowTool#secret_version_for_client_secret}

---

### GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig: googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>string</code> | Optional. |

---

##### `serviceAgentAuth`<sup>Optional</sup> <a name="serviceAgentAuth" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```typescript
public readonly serviceAgentAuth: string;
```

- *Type:* string

Optional.

Indicate the auth token type generated from the Dialogflow service agent.
The generated token is sent in the Authorization header. Possible values: ["ID_TOKEN", "ACCESS_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service_agent_auth GoogleDialogflowTool#service_agent_auth}

---

### GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig <a name="GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolOpenApiSpecServiceDirectoryConfig: googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service GoogleDialogflowTool#service}

---

### GoogleDialogflowToolOpenApiSpecTlsConfig <a name="GoogleDialogflowToolOpenApiSpecTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolOpenApiSpecTlsConfig: googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig.property.caCerts">caCerts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | ca_certs block. |

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig.property.caCerts"></a>

```typescript
public readonly caCerts: IResolvable | GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#ca_certs GoogleDialogflowTool#ca_certs}

---

### GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts <a name="GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolOpenApiSpecTlsConfigCaCerts: googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert">cert</a></code> | <code>string</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName">displayName</a></code> | <code>string</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#cert GoogleDialogflowTool#cert}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#display_name GoogleDialogflowTool#display_name}

---

### GoogleDialogflowToolTimeouts <a name="GoogleDialogflowToolTimeouts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

const googleDialogflowToolTimeouts: googleDialogflowTool.GoogleDialogflowToolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#create GoogleDialogflowTool#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#delete GoogleDialogflowTool#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#update GoogleDialogflowTool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#create GoogleDialogflowTool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#delete GoogleDialogflowTool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#update GoogleDialogflowTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference <a name="GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowToolConnectorSpecActionsEntityOperation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a>

---


### GoogleDialogflowToolConnectorSpecActionsList <a name="GoogleDialogflowToolConnectorSpecActionsList" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowToolConnectorSpecActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowToolConnectorSpecActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>[]

---


### GoogleDialogflowToolConnectorSpecActionsOutputReference <a name="GoogleDialogflowToolConnectorSpecActionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.putEntityOperation">putEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId">resetConnectionActionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation">resetEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetInputFields">resetInputFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetOutputFields">resetOutputFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityOperation` <a name="putEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.putEntityOperation"></a>

```typescript
public putEntityOperation(value: GoogleDialogflowToolConnectorSpecActionsEntityOperation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a>

---

##### `resetConnectionActionId` <a name="resetConnectionActionId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId"></a>

```typescript
public resetConnectionActionId(): void
```

##### `resetEntityOperation` <a name="resetEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation"></a>

```typescript
public resetEntityOperation(): void
```

##### `resetInputFields` <a name="resetInputFields" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetInputFields"></a>

```typescript
public resetInputFields(): void
```

##### `resetOutputFields` <a name="resetOutputFields" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetOutputFields"></a>

```typescript
public resetOutputFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.entityOperation">entityOperation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference">GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput">connectionActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput">entityOperationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput">inputFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput">outputFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId">connectionActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.inputFields">inputFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.outputFields">outputFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityOperation`<sup>Required</sup> <a name="entityOperation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.entityOperation"></a>

```typescript
public readonly entityOperation: GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference">GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference</a>

---

##### `connectionActionIdInput`<sup>Optional</sup> <a name="connectionActionIdInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput"></a>

```typescript
public readonly connectionActionIdInput: string;
```

- *Type:* string

---

##### `entityOperationInput`<sup>Optional</sup> <a name="entityOperationInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput"></a>

```typescript
public readonly entityOperationInput: GoogleDialogflowToolConnectorSpecActionsEntityOperation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a>

---

##### `inputFieldsInput`<sup>Optional</sup> <a name="inputFieldsInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput"></a>

```typescript
public readonly inputFieldsInput: string[];
```

- *Type:* string[]

---

##### `outputFieldsInput`<sup>Optional</sup> <a name="outputFieldsInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput"></a>

```typescript
public readonly outputFieldsInput: string[];
```

- *Type:* string[]

---

##### `connectionActionId`<sup>Required</sup> <a name="connectionActionId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId"></a>

```typescript
public readonly connectionActionId: string;
```

- *Type:* string

---

##### `inputFields`<sup>Required</sup> <a name="inputFields" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.inputFields"></a>

```typescript
public readonly inputFields: string[];
```

- *Type:* string[]

---

##### `outputFields`<sup>Required</sup> <a name="outputFields" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.outputFields"></a>

```typescript
public readonly outputFields: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowToolConnectorSpecActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>

---


### GoogleDialogflowToolConnectorSpecOutputReference <a name="GoogleDialogflowToolConnectorSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.putActions">putActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.putActions"></a>

```typescript
public putActions(value: IResolvable | GoogleDialogflowToolConnectorSpecActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList">GoogleDialogflowToolConnectorSpecActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.actions"></a>

```typescript
public readonly actions: GoogleDialogflowToolConnectorSpecActionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList">GoogleDialogflowToolConnectorSpecActionsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | GoogleDialogflowToolConnectorSpecActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowToolConnectorSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a>

---


### GoogleDialogflowToolFunctionSpecOutputReference <a name="GoogleDialogflowToolFunctionSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resetInputSchema">resetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resetMethodType">resetMethodType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resetOutputSchema">resetOutputSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputSchema` <a name="resetInputSchema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resetInputSchema"></a>

```typescript
public resetInputSchema(): void
```

##### `resetMethodType` <a name="resetMethodType" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resetMethodType"></a>

```typescript
public resetMethodType(): void
```

##### `resetOutputSchema` <a name="resetOutputSchema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resetOutputSchema"></a>

```typescript
public resetOutputSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.inputSchemaInput">inputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.methodTypeInput">methodTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.outputSchemaInput">outputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.inputSchema">inputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.methodType">methodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.outputSchema">outputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputSchemaInput`<sup>Optional</sup> <a name="inputSchemaInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```typescript
public readonly inputSchemaInput: string;
```

- *Type:* string

---

##### `methodTypeInput`<sup>Optional</sup> <a name="methodTypeInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.methodTypeInput"></a>

```typescript
public readonly methodTypeInput: string;
```

- *Type:* string

---

##### `outputSchemaInput`<sup>Optional</sup> <a name="outputSchemaInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```typescript
public readonly outputSchemaInput: string;
```

- *Type:* string

---

##### `inputSchema`<sup>Required</sup> <a name="inputSchema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.inputSchema"></a>

```typescript
public readonly inputSchema: string;
```

- *Type:* string

---

##### `methodType`<sup>Required</sup> <a name="methodType" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.methodType"></a>

```typescript
public readonly methodType: string;
```

- *Type:* string

---

##### `outputSchema`<sup>Required</sup> <a name="outputSchema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.outputSchema"></a>

```typescript
public readonly outputSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowToolFunctionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a>

---


### GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">resetSecretVersionForApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetSecretVersionForApiKey` <a name="resetSecretVersionForApiKey" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```typescript
public resetSecretVersionForApiKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">secretVersionForApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```typescript
public readonly requestLocationInput: string;
```

- *Type:* string

---

##### `secretVersionForApiKeyInput`<sup>Optional</sup> <a name="secretVersionForApiKeyInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```typescript
public readonly secretVersionForApiKeyInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

---

##### `secretVersionForApiKey`<sup>Required</sup> <a name="secretVersionForApiKey" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```typescript
public readonly secretVersionForApiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">resetSecretVersionForToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretVersionForToken` <a name="resetSecretVersionForToken" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```typescript
public resetSecretVersionForToken(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">secretVersionForTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">secretVersionForToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretVersionForTokenInput`<sup>Optional</sup> <a name="secretVersionForTokenInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```typescript
public readonly secretVersionForTokenInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `secretVersionForToken`<sup>Required</sup> <a name="secretVersionForToken" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```typescript
public readonly secretVersionForToken: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">resetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSecretVersionForClientSecret` <a name="resetSecretVersionForClientSecret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```typescript
public resetSecretVersionForClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">secretVersionForClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```typescript
public readonly oauthGrantTypeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `secretVersionForClientSecretInput`<sup>Optional</sup> <a name="secretVersionForClientSecretInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```typescript
public readonly secretVersionForClientSecretInput: string;
```

- *Type:* string

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `secretVersionForClientSecret`<sup>Required</sup> <a name="secretVersionForClientSecret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```typescript
public readonly secretVersionForClientSecret: string;
```

- *Type:* string

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---


### GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference <a name="GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">putServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">resetServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```typescript
public putApiKeyConfig(value: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```typescript
public putBearerTokenConfig(value: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```typescript
public putOauthConfig(value: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `putServiceAgentAuthConfig` <a name="putServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```typescript
public putServiceAgentAuthConfig(value: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```typescript
public resetApiKeyConfig(): void
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```typescript
public resetBearerTokenConfig(): void
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```typescript
public resetOauthConfig(): void
```

##### `resetServiceAgentAuthConfig` <a name="resetServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```typescript
public resetServiceAgentAuthConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">serviceAgentAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAgentAuthConfig`<sup>Required</sup> <a name="serviceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```typescript
public readonly serviceAgentAuthConfig: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```typescript
public readonly apiKeyConfigInput: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```typescript
public readonly bearerTokenConfigInput: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```typescript
public readonly oauthConfigInput: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `serviceAgentAuthConfigInput`<sup>Optional</sup> <a name="serviceAgentAuthConfigInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```typescript
public readonly serviceAgentAuthConfigInput: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowToolOpenApiSpecAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a>

---


### GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">resetServiceAgentAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAgentAuth` <a name="resetServiceAgentAuth" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```typescript
public resetServiceAgentAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">serviceAgentAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAgentAuthInput`<sup>Optional</sup> <a name="serviceAgentAuthInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```typescript
public readonly serviceAgentAuthInput: string;
```

- *Type:* string

---

##### `serviceAgentAuth`<sup>Required</sup> <a name="serviceAgentAuth" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```typescript
public readonly serviceAgentAuth: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### GoogleDialogflowToolOpenApiSpecOutputReference <a name="GoogleDialogflowToolOpenApiSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putAuthentication"></a>

```typescript
public putAuthentication(value: GoogleDialogflowToolOpenApiSpecAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putTlsConfig"></a>

```typescript
public putTlsConfig(value: GoogleDialogflowToolOpenApiSpecTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.textSchemaInput">textSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.textSchema">textSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.authentication"></a>

```typescript
public readonly authentication: GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: GoogleDialogflowToolOpenApiSpecAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `textSchemaInput`<sup>Optional</sup> <a name="textSchemaInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```typescript
public readonly textSchemaInput: string;
```

- *Type:* string

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: GoogleDialogflowToolOpenApiSpecTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a>

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.textSchema"></a>

```typescript
public readonly textSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowToolOpenApiSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a>

---


### GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---


### GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList <a name="GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]

---


### GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">certInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```typescript
public readonly certInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>

---


### GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference <a name="GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts">putCaCerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaCerts` <a name="putCaCerts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```typescript
public putCaCerts(value: IResolvable | GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">caCertsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```typescript
public readonly caCerts: GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `caCertsInput`<sup>Optional</sup> <a name="caCertsInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```typescript
public readonly caCertsInput: IResolvable | GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowToolOpenApiSpecTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a>

---


### GoogleDialogflowToolTimeoutsOutputReference <a name="GoogleDialogflowToolTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowTool } from '@cdktn/provider-google-beta'

new googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowToolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a>

---



