# `googleNetworkSecuritySacAttachment` Submodule <a name="`googleNetworkSecuritySacAttachment` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecuritySacAttachment <a name="GoogleNetworkSecuritySacAttachment" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment google_network_security_sac_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer"></a>

```typescript
import { googleNetworkSecuritySacAttachment } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment(scope: Construct, id: string, config: GoogleNetworkSecuritySacAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig">GoogleNetworkSecuritySacAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig">GoogleNetworkSecuritySacAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions">putSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetSymantecOptions">resetSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSymantecOptions` <a name="putSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions"></a>

```typescript
public putSymantecOptions(value: GoogleNetworkSecuritySacAttachmentSymantecOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecuritySacAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

---

##### `resetCountry` <a name="resetCountry" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSymantecOptions` <a name="resetSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetSymantecOptions"></a>

```typescript
public resetSymantecOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecuritySacAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct"></a>

```typescript
import { googleNetworkSecuritySacAttachment } from '@cdktn/provider-google-beta'

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement"></a>

```typescript
import { googleNetworkSecuritySacAttachment } from '@cdktn/provider-google-beta'

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource"></a>

```typescript
import { googleNetworkSecuritySacAttachment } from '@cdktn/provider-google-beta'

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport"></a>

```typescript
import { googleNetworkSecuritySacAttachment } from '@cdktn/provider-google-beta'

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkSecuritySacAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecuritySacAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecuritySacAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecuritySacAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptions">symantecOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference">GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference">GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGatewayInput">nccGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealmInput">sacRealmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptionsInput">symantecOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGateway">nccGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealm">sacRealm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `symantecOptions`<sup>Required</sup> <a name="symantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptions"></a>

```typescript
public readonly symantecOptions: GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference">GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference">GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nccGatewayInput`<sup>Optional</sup> <a name="nccGatewayInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGatewayInput"></a>

```typescript
public readonly nccGatewayInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sacRealmInput`<sup>Optional</sup> <a name="sacRealmInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealmInput"></a>

```typescript
public readonly sacRealmInput: string;
```

- *Type:* string

---

##### `symantecOptionsInput`<sup>Optional</sup> <a name="symantecOptionsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptionsInput"></a>

```typescript
public readonly symantecOptionsInput: GoogleNetworkSecuritySacAttachmentSymantecOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecuritySacAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nccGateway`<sup>Required</sup> <a name="nccGateway" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGateway"></a>

```typescript
public readonly nccGateway: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `sacRealm`<sup>Required</sup> <a name="sacRealm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealm"></a>

```typescript
public readonly sacRealm: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecuritySacAttachmentConfig <a name="GoogleNetworkSecuritySacAttachmentConfig" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.Initializer"></a>

```typescript
import { googleNetworkSecuritySacAttachment } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySacAttachmentConfig: googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.location">location</a></code> | <code>string</code> | The location of the SACAttachment resource. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.name">name</a></code> | <code>string</code> | Identifier. Resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.nccGateway">nccGateway</a></code> | <code>string</code> | NCC Gateway associated with the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.sacRealm">sacRealm</a></code> | <code>string</code> | SAC Realm which owns the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.country">country</a></code> | <code>string</code> | Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.symantecOptions">symantecOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | symantec_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the SACAttachment resource. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#location GoogleNetworkSecuritySacAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier. Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#name GoogleNetworkSecuritySacAttachment#name}

---

##### `nccGateway`<sup>Required</sup> <a name="nccGateway" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.nccGateway"></a>

```typescript
public readonly nccGateway: string;
```

- *Type:* string

NCC Gateway associated with the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#ncc_gateway GoogleNetworkSecuritySacAttachment#ncc_gateway}

---

##### `sacRealm`<sup>Required</sup> <a name="sacRealm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.sacRealm"></a>

```typescript
public readonly sacRealm: string;
```

- *Type:* string

SAC Realm which owns the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#sac_realm GoogleNetworkSecuritySacAttachment#sac_realm}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#country GoogleNetworkSecuritySacAttachment#country}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#deletion_policy GoogleNetworkSecuritySacAttachment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#labels GoogleNetworkSecuritySacAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}.

---

##### `symantecOptions`<sup>Optional</sup> <a name="symantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.symantecOptions"></a>

```typescript
public readonly symantecOptions: GoogleNetworkSecuritySacAttachmentSymantecOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

symantec_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#symantec_options GoogleNetworkSecuritySacAttachment#symantec_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecuritySacAttachmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#timeouts GoogleNetworkSecuritySacAttachment#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#time_zone GoogleNetworkSecuritySacAttachment#time_zone}

---

### GoogleNetworkSecuritySacAttachmentSymantecOptions <a name="GoogleNetworkSecuritySacAttachmentSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.Initializer"></a>

```typescript
import { googleNetworkSecuritySacAttachment } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySacAttachmentSymantecOptions: googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecLocationName">symantecLocationName</a></code> | <code>string</code> | Name to be used when creating a location on the customer's behalf in Symantec's Location API. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecSite">symantecSite</a></code> | <code>string</code> | Symantec data center identifier that this attachment will connect to. |

---

##### `symantecLocationName`<sup>Optional</sup> <a name="symantecLocationName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecLocationName"></a>

```typescript
public readonly symantecLocationName: string;
```

- *Type:* string

Name to be used when creating a location on the customer's behalf in Symantec's Location API.

Not to be confused with Google Cloud locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#symantec_location_name GoogleNetworkSecuritySacAttachment#symantec_location_name}

---

##### `symantecSite`<sup>Optional</sup> <a name="symantecSite" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecSite"></a>

```typescript
public readonly symantecSite: string;
```

- *Type:* string

Symantec data center identifier that this attachment will connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#symantec_site GoogleNetworkSecuritySacAttachment#symantec_site}

---

### GoogleNetworkSecuritySacAttachmentTimeouts <a name="GoogleNetworkSecuritySacAttachmentTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecuritySacAttachment } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySacAttachmentTimeouts: googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#create GoogleNetworkSecuritySacAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#delete GoogleNetworkSecuritySacAttachment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#update GoogleNetworkSecuritySacAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#create GoogleNetworkSecuritySacAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#delete GoogleNetworkSecuritySacAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_sac_attachment#update GoogleNetworkSecuritySacAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference <a name="GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySacAttachment } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecLocationName">resetSymantecLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecSite">resetSymantecSite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSymantecLocationName` <a name="resetSymantecLocationName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecLocationName"></a>

```typescript
public resetSymantecLocationName(): void
```

##### `resetSymantecSite` <a name="resetSymantecSite" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecSite"></a>

```typescript
public resetSymantecSite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationNameInput">symantecLocationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSiteInput">symantecSiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationName">symantecLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSite">symantecSite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `symantecLocationNameInput`<sup>Optional</sup> <a name="symantecLocationNameInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationNameInput"></a>

```typescript
public readonly symantecLocationNameInput: string;
```

- *Type:* string

---

##### `symantecSiteInput`<sup>Optional</sup> <a name="symantecSiteInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSiteInput"></a>

```typescript
public readonly symantecSiteInput: string;
```

- *Type:* string

---

##### `symantecLocationName`<sup>Required</sup> <a name="symantecLocationName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationName"></a>

```typescript
public readonly symantecLocationName: string;
```

- *Type:* string

---

##### `symantecSite`<sup>Required</sup> <a name="symantecSite" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSite"></a>

```typescript
public readonly symantecSite: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecuritySacAttachmentSymantecOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---


### GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference <a name="GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySacAttachment } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySacAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

---



