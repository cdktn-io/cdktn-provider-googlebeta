# `googleApphubServiceProjectAttachment` Submodule <a name="`googleApphubServiceProjectAttachment` Submodule" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApphubServiceProjectAttachment <a name="GoogleApphubServiceProjectAttachment" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment google_apphub_service_project_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.Initializer"></a>

```typescript
import { googleApphubServiceProjectAttachment } from '@cdktn/provider-google-beta'

new googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment(scope: Construct, id: string, config: GoogleApphubServiceProjectAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig">GoogleApphubServiceProjectAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig">GoogleApphubServiceProjectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.resetServiceProject">resetServiceProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleApphubServiceProjectAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts">GoogleApphubServiceProjectAttachmentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetServiceProject` <a name="resetServiceProject" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.resetServiceProject"></a>

```typescript
public resetServiceProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApphubServiceProjectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.isConstruct"></a>

```typescript
import { googleApphubServiceProjectAttachment } from '@cdktn/provider-google-beta'

googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.isTerraformElement"></a>

```typescript
import { googleApphubServiceProjectAttachment } from '@cdktn/provider-google-beta'

googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.isTerraformResource"></a>

```typescript
import { googleApphubServiceProjectAttachment } from '@cdktn/provider-google-beta'

googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.generateConfigForImport"></a>

```typescript
import { googleApphubServiceProjectAttachment } from '@cdktn/provider-google-beta'

googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleApphubServiceProjectAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApphubServiceProjectAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApphubServiceProjectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApphubServiceProjectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference">GoogleApphubServiceProjectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.serviceProjectAttachmentIdInput">serviceProjectAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.serviceProjectInput">serviceProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts">GoogleApphubServiceProjectAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.serviceProject">serviceProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.serviceProjectAttachmentId">serviceProjectAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApphubServiceProjectAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference">GoogleApphubServiceProjectAttachmentTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceProjectAttachmentIdInput`<sup>Optional</sup> <a name="serviceProjectAttachmentIdInput" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.serviceProjectAttachmentIdInput"></a>

```typescript
public readonly serviceProjectAttachmentIdInput: string;
```

- *Type:* string

---

##### `serviceProjectInput`<sup>Optional</sup> <a name="serviceProjectInput" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.serviceProjectInput"></a>

```typescript
public readonly serviceProjectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleApphubServiceProjectAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts">GoogleApphubServiceProjectAttachmentTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceProject`<sup>Required</sup> <a name="serviceProject" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.serviceProject"></a>

```typescript
public readonly serviceProject: string;
```

- *Type:* string

---

##### `serviceProjectAttachmentId`<sup>Required</sup> <a name="serviceProjectAttachmentId" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.serviceProjectAttachmentId"></a>

```typescript
public readonly serviceProjectAttachmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApphubServiceProjectAttachmentConfig <a name="GoogleApphubServiceProjectAttachmentConfig" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.Initializer"></a>

```typescript
import { googleApphubServiceProjectAttachment } from '@cdktn/provider-google-beta'

const googleApphubServiceProjectAttachmentConfig: googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.serviceProjectAttachmentId">serviceProjectAttachmentId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#id GoogleApphubServiceProjectAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#project GoogleApphubServiceProjectAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.serviceProject">serviceProject</a></code> | <code>string</code> | "Immutable. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts">GoogleApphubServiceProjectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `serviceProjectAttachmentId`<sup>Required</sup> <a name="serviceProjectAttachmentId" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.serviceProjectAttachmentId"></a>

```typescript
public readonly serviceProjectAttachmentId: string;
```

- *Type:* string

Required.

The service project attachment identifier must contain the project_id of the service project specified in the service_project_attachment.service_project field. Hint: "projects/{project_id}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#service_project_attachment_id GoogleApphubServiceProjectAttachment#service_project_attachment_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#deletion_policy GoogleApphubServiceProjectAttachment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#id GoogleApphubServiceProjectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#project GoogleApphubServiceProjectAttachment#project}.

---

##### `serviceProject`<sup>Optional</sup> <a name="serviceProject" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.serviceProject"></a>

```typescript
public readonly serviceProject: string;
```

- *Type:* string

"Immutable.

Service project name in the format: \"projects/abc\"
or \"projects/123\". As input, project name with either project id or number
are accepted. As output, this field will contain project number."

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#service_project GoogleApphubServiceProjectAttachment#service_project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApphubServiceProjectAttachmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts">GoogleApphubServiceProjectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#timeouts GoogleApphubServiceProjectAttachment#timeouts}

---

### GoogleApphubServiceProjectAttachmentTimeouts <a name="GoogleApphubServiceProjectAttachmentTimeouts" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts.Initializer"></a>

```typescript
import { googleApphubServiceProjectAttachment } from '@cdktn/provider-google-beta'

const googleApphubServiceProjectAttachmentTimeouts: googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#create GoogleApphubServiceProjectAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#delete GoogleApphubServiceProjectAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#create GoogleApphubServiceProjectAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service_project_attachment#delete GoogleApphubServiceProjectAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApphubServiceProjectAttachmentTimeoutsOutputReference <a name="GoogleApphubServiceProjectAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleApphubServiceProjectAttachment } from '@cdktn/provider-google-beta'

new googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts">GoogleApphubServiceProjectAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApphubServiceProjectAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApphubServiceProjectAttachment.GoogleApphubServiceProjectAttachmentTimeouts">GoogleApphubServiceProjectAttachmentTimeouts</a>

---



