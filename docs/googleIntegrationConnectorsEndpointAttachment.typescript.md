# `googleIntegrationConnectorsEndpointAttachment` Submodule <a name="`googleIntegrationConnectorsEndpointAttachment` Submodule" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationConnectorsEndpointAttachment <a name="GoogleIntegrationConnectorsEndpointAttachment" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment google_integration_connectors_endpoint_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer"></a>

```typescript
import { googleIntegrationConnectorsEndpointAttachment } from '@cdktn/provider-google-beta'

new googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment(scope: Construct, id: string, config: GoogleIntegrationConnectorsEndpointAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig">GoogleIntegrationConnectorsEndpointAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig">GoogleIntegrationConnectorsEndpointAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetEndpointGlobalAccess">resetEndpointGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIntegrationConnectorsEndpointAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndpointGlobalAccess` <a name="resetEndpointGlobalAccess" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetEndpointGlobalAccess"></a>

```typescript
public resetEndpointGlobalAccess(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIntegrationConnectorsEndpointAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isConstruct"></a>

```typescript
import { googleIntegrationConnectorsEndpointAttachment } from '@cdktn/provider-google-beta'

googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformElement"></a>

```typescript
import { googleIntegrationConnectorsEndpointAttachment } from '@cdktn/provider-google-beta'

googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformResource"></a>

```typescript
import { googleIntegrationConnectorsEndpointAttachment } from '@cdktn/provider-google-beta'

googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport"></a>

```typescript
import { googleIntegrationConnectorsEndpointAttachment } from '@cdktn/provider-google-beta'

googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleIntegrationConnectorsEndpointAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIntegrationConnectorsEndpointAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIntegrationConnectorsEndpointAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationConnectorsEndpointAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointIp">endpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointGlobalAccessInput">endpointGlobalAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput">serviceAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointGlobalAccess">endpointGlobalAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `endpointIp`<sup>Required</sup> <a name="endpointIp" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointIp"></a>

```typescript
public readonly endpointIp: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointGlobalAccessInput`<sup>Optional</sup> <a name="endpointGlobalAccessInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointGlobalAccessInput"></a>

```typescript
public readonly endpointGlobalAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceAttachmentInput`<sup>Optional</sup> <a name="serviceAttachmentInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput"></a>

```typescript
public readonly serviceAttachmentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIntegrationConnectorsEndpointAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpointGlobalAccess`<sup>Required</sup> <a name="endpointGlobalAccess" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointGlobalAccess"></a>

```typescript
public readonly endpointGlobalAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationConnectorsEndpointAttachmentConfig <a name="GoogleIntegrationConnectorsEndpointAttachmentConfig" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.Initializer"></a>

```typescript
import { googleIntegrationConnectorsEndpointAttachment } from '@cdktn/provider-google-beta'

const googleIntegrationConnectorsEndpointAttachmentConfig: googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.location">location</a></code> | <code>string</code> | Location in which Endpoint Attachment needs to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.name">name</a></code> | <code>string</code> | Name of Endpoint Attachment needs to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | The path of the service attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.description">description</a></code> | <code>string</code> | Description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.endpointGlobalAccess">endpointGlobalAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable global access for endpoint attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#id GoogleIntegrationConnectorsEndpointAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#project GoogleIntegrationConnectorsEndpointAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location in which Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#location GoogleIntegrationConnectorsEndpointAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#name GoogleIntegrationConnectorsEndpointAttachment#name}

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

The path of the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#service_attachment GoogleIntegrationConnectorsEndpointAttachment#service_attachment}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#deletion_policy GoogleIntegrationConnectorsEndpointAttachment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#description GoogleIntegrationConnectorsEndpointAttachment#description}

---

##### `endpointGlobalAccess`<sup>Optional</sup> <a name="endpointGlobalAccess" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.endpointGlobalAccess"></a>

```typescript
public readonly endpointGlobalAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable global access for endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#endpoint_global_access GoogleIntegrationConnectorsEndpointAttachment#endpoint_global_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#id GoogleIntegrationConnectorsEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#labels GoogleIntegrationConnectorsEndpointAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#project GoogleIntegrationConnectorsEndpointAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIntegrationConnectorsEndpointAttachmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#timeouts GoogleIntegrationConnectorsEndpointAttachment#timeouts}

---

### GoogleIntegrationConnectorsEndpointAttachmentTimeouts <a name="GoogleIntegrationConnectorsEndpointAttachmentTimeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.Initializer"></a>

```typescript
import { googleIntegrationConnectorsEndpointAttachment } from '@cdktn/provider-google-beta'

const googleIntegrationConnectorsEndpointAttachmentTimeouts: googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#create GoogleIntegrationConnectorsEndpointAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#delete GoogleIntegrationConnectorsEndpointAttachment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#update GoogleIntegrationConnectorsEndpointAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#create GoogleIntegrationConnectorsEndpointAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#delete GoogleIntegrationConnectorsEndpointAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_integration_connectors_endpoint_attachment#update GoogleIntegrationConnectorsEndpointAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference <a name="GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIntegrationConnectorsEndpointAttachment } from '@cdktn/provider-google-beta'

new googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIntegrationConnectorsEndpointAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>

---



