# `googleEdgenetworkInterconnectAttachment` Submodule <a name="`googleEdgenetworkInterconnectAttachment` Submodule" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgenetworkInterconnectAttachment <a name="GoogleEdgenetworkInterconnectAttachment" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment google_edgenetwork_interconnect_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.Initializer"></a>

```typescript
import { googleEdgenetworkInterconnectAttachment } from '@cdktn/provider-google-beta'

new googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment(scope: Construct, id: string, config: GoogleEdgenetworkInterconnectAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig">GoogleEdgenetworkInterconnectAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig">GoogleEdgenetworkInterconnectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleEdgenetworkInterconnectAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts">GoogleEdgenetworkInterconnectAttachmentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleEdgenetworkInterconnectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.isConstruct"></a>

```typescript
import { googleEdgenetworkInterconnectAttachment } from '@cdktn/provider-google-beta'

googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.isTerraformElement"></a>

```typescript
import { googleEdgenetworkInterconnectAttachment } from '@cdktn/provider-google-beta'

googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.isTerraformResource"></a>

```typescript
import { googleEdgenetworkInterconnectAttachment } from '@cdktn/provider-google-beta'

googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.generateConfigForImport"></a>

```typescript
import { googleEdgenetworkInterconnectAttachment } from '@cdktn/provider-google-beta'

googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleEdgenetworkInterconnectAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEdgenetworkInterconnectAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEdgenetworkInterconnectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleEdgenetworkInterconnectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference">GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.interconnectAttachmentIdInput">interconnectAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.interconnectInput">interconnectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts">GoogleEdgenetworkInterconnectAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.vlanIdInput">vlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.interconnect">interconnect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.interconnectAttachmentId">interconnectAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference">GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interconnectAttachmentIdInput`<sup>Optional</sup> <a name="interconnectAttachmentIdInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.interconnectAttachmentIdInput"></a>

```typescript
public readonly interconnectAttachmentIdInput: string;
```

- *Type:* string

---

##### `interconnectInput`<sup>Optional</sup> <a name="interconnectInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.interconnectInput"></a>

```typescript
public readonly interconnectInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleEdgenetworkInterconnectAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts">GoogleEdgenetworkInterconnectAttachmentTimeouts</a>

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: number;
```

- *Type:* number

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.interconnect"></a>

```typescript
public readonly interconnect: string;
```

- *Type:* string

---

##### `interconnectAttachmentId`<sup>Required</sup> <a name="interconnectAttachmentId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.interconnectAttachmentId"></a>

```typescript
public readonly interconnectAttachmentId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgenetworkInterconnectAttachmentConfig <a name="GoogleEdgenetworkInterconnectAttachmentConfig" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.Initializer"></a>

```typescript
import { googleEdgenetworkInterconnectAttachment } from '@cdktn/provider-google-beta'

const googleEdgenetworkInterconnectAttachmentConfig: googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.interconnect">interconnect</a></code> | <code>string</code> | The ID of the underlying interconnect that this attachment's traffic will traverse through. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.interconnectAttachmentId">interconnectAttachmentId</a></code> | <code>string</code> | A unique ID that identifies this interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.location">location</a></code> | <code>string</code> | The Google Cloud region to which the target Distributed Cloud Edge zone belongs. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.network">network</a></code> | <code>string</code> | The ID of the network to which this interconnect attachment belongs. Must be of the form: 'projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.vlanId">vlanId</a></code> | <code>number</code> | VLAN ID provided by user. Must be site-wise unique. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.zone">zone</a></code> | <code>string</code> | The name of the target Distributed Cloud Edge zone. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#id GoogleEdgenetworkInterconnectAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels associated with this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.mtu">mtu</a></code> | <code>number</code> | IP (L3) MTU value of the virtual edge cloud. Default value is '1500'. Possible values are: '1500', '9000'. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#project GoogleEdgenetworkInterconnectAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts">GoogleEdgenetworkInterconnectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.interconnect"></a>

```typescript
public readonly interconnect: string;
```

- *Type:* string

The ID of the underlying interconnect that this attachment's traffic will traverse through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#interconnect GoogleEdgenetworkInterconnectAttachment#interconnect}

---

##### `interconnectAttachmentId`<sup>Required</sup> <a name="interconnectAttachmentId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.interconnectAttachmentId"></a>

```typescript
public readonly interconnectAttachmentId: string;
```

- *Type:* string

A unique ID that identifies this interconnect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#interconnect_attachment_id GoogleEdgenetworkInterconnectAttachment#interconnect_attachment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The Google Cloud region to which the target Distributed Cloud Edge zone belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#location GoogleEdgenetworkInterconnectAttachment#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The ID of the network to which this interconnect attachment belongs. Must be of the form: 'projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#network GoogleEdgenetworkInterconnectAttachment#network}

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

VLAN ID provided by user. Must be site-wise unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#vlan_id GoogleEdgenetworkInterconnectAttachment#vlan_id}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The name of the target Distributed Cloud Edge zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#zone GoogleEdgenetworkInterconnectAttachment#zone}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#deletion_policy GoogleEdgenetworkInterconnectAttachment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#description GoogleEdgenetworkInterconnectAttachment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#id GoogleEdgenetworkInterconnectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#labels GoogleEdgenetworkInterconnectAttachment#labels}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

IP (L3) MTU value of the virtual edge cloud. Default value is '1500'. Possible values are: '1500', '9000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#mtu GoogleEdgenetworkInterconnectAttachment#mtu}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#project GoogleEdgenetworkInterconnectAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleEdgenetworkInterconnectAttachmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts">GoogleEdgenetworkInterconnectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#timeouts GoogleEdgenetworkInterconnectAttachment#timeouts}

---

### GoogleEdgenetworkInterconnectAttachmentTimeouts <a name="GoogleEdgenetworkInterconnectAttachmentTimeouts" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts.Initializer"></a>

```typescript
import { googleEdgenetworkInterconnectAttachment } from '@cdktn/provider-google-beta'

const googleEdgenetworkInterconnectAttachmentTimeouts: googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#create GoogleEdgenetworkInterconnectAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#delete GoogleEdgenetworkInterconnectAttachment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#update GoogleEdgenetworkInterconnectAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#create GoogleEdgenetworkInterconnectAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#delete GoogleEdgenetworkInterconnectAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_edgenetwork_interconnect_attachment#update GoogleEdgenetworkInterconnectAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference <a name="GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleEdgenetworkInterconnectAttachment } from '@cdktn/provider-google-beta'

new googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts">GoogleEdgenetworkInterconnectAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleEdgenetworkInterconnectAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleEdgenetworkInterconnectAttachment.GoogleEdgenetworkInterconnectAttachmentTimeouts">GoogleEdgenetworkInterconnectAttachmentTimeouts</a>

---



