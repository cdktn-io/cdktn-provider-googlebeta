# `googleDocumentAiSchemaVersion` Submodule <a name="`googleDocumentAiSchemaVersion` Submodule" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDocumentAiSchemaVersion <a name="GoogleDocumentAiSchemaVersion" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version google_document_ai_schema_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

new googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion(scope: Construct, id: string, config: GoogleDocumentAiSchemaVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig">GoogleDocumentAiSchemaVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig">GoogleDocumentAiSchemaVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema"></a>

```typescript
public putSchema(value: GoogleDocumentAiSchemaVersionSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDocumentAiSchemaVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDocumentAiSchemaVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDocumentAiSchemaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDocumentAiSchemaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference">GoogleDocumentAiSchemaVersionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference">GoogleDocumentAiSchemaVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaIdInput">schemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schema"></a>

```typescript
public readonly schema: GoogleDocumentAiSchemaVersionSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference">GoogleDocumentAiSchemaVersionSchemaOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDocumentAiSchemaVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference">GoogleDocumentAiSchemaVersionTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaInput"></a>

```typescript
public readonly schemaInput: GoogleDocumentAiSchemaVersionSchema;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDocumentAiSchemaVersionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDocumentAiSchemaVersionConfig <a name="GoogleDocumentAiSchemaVersionConfig" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

const googleDocumentAiSchemaVersionConfig: googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.displayName">displayName</a></code> | <code>string</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schemaId">schemaId</a></code> | <code>string</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#location GoogleDocumentAiSchemaVersion#location}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schema"></a>

```typescript
public readonly schema: GoogleDocumentAiSchemaVersionSchema;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema GoogleDocumentAiSchemaVersion#schema}

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema_id GoogleDocumentAiSchemaVersion#schema_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#deletion_policy GoogleDocumentAiSchemaVersion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#labels GoogleDocumentAiSchemaVersion#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDocumentAiSchemaVersionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#timeouts GoogleDocumentAiSchemaVersion#timeouts}

---

### GoogleDocumentAiSchemaVersionSchema <a name="GoogleDocumentAiSchemaVersionSchema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

const googleDocumentAiSchemaVersionSchema: googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.description">description</a></code> | <code>string</code> | Description of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.displayName">displayName</a></code> | <code>string</code> | Display name to show users. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.documentPrompt">documentPrompt</a></code> | <code>string</code> | Document-level prompt provided by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.entityTypes">entityTypes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]</code> | entity_types block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | metadata block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#description GoogleDocumentAiSchemaVersion#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name to show users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `documentPrompt`<sup>Optional</sup> <a name="documentPrompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.documentPrompt"></a>

```typescript
public readonly documentPrompt: string;
```

- *Type:* string

Document-level prompt provided by the user.

This custom text is injected into the AI model's prompt to provide extra, document-wide guidance for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_prompt GoogleDocumentAiSchemaVersion#document_prompt}

---

##### `entityTypes`<sup>Optional</sup> <a name="entityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.entityTypes"></a>

```typescript
public readonly entityTypes: IResolvable | GoogleDocumentAiSchemaVersionSchemaEntityTypes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]

entity_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#entity_types GoogleDocumentAiSchemaVersion#entity_types}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.metadata"></a>

```typescript
public readonly metadata: GoogleDocumentAiSchemaVersionSchemaMetadata;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#metadata GoogleDocumentAiSchemaVersion#metadata}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypes <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

const googleDocumentAiSchemaVersionSchemaEntityTypes: googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.name">name</a></code> | <code>string</code> | Name of the type. It must be unique within the schema file and cannot be a "Common Type". |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes">baseTypes</a></code> | <code>string[]</code> | The entity type that this type is derived from. For now, one and only one should be set. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.displayName">displayName</a></code> | <code>string</code> | User defined name for the type. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.enumValues">enumValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | enum_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.properties">properties</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]</code> | properties block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the type. It must be unique within the schema file and cannot be a "Common Type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#name GoogleDocumentAiSchemaVersion#name}

---

##### `baseTypes`<sup>Optional</sup> <a name="baseTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes"></a>

```typescript
public readonly baseTypes: string[];
```

- *Type:* string[]

The entity type that this type is derived from. For now, one and only one should be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#base_types GoogleDocumentAiSchemaVersion#base_types}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User defined name for the type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `enumValues`<sup>Optional</sup> <a name="enumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.enumValues"></a>

```typescript
public readonly enumValues: GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

enum_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#enum_values GoogleDocumentAiSchemaVersion#enum_values}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.properties"></a>

```typescript
public readonly properties: IResolvable | GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#properties GoogleDocumentAiSchemaVersion#properties}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

const googleDocumentAiSchemaVersionSchemaEntityTypesEnumValues: googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values">values</a></code> | <code>string[]</code> | The individual values that this enum values type can include. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The individual values that this enum values type can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#values GoogleDocumentAiSchemaVersion#values}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

const googleDocumentAiSchemaVersionSchemaEntityTypesProperties: googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.name">name</a></code> | <code>string</code> | The name of the property. Follows the same guidelines as the EntityType name. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType">valueType</a></code> | <code>string</code> | A reference to the value type of the property. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName">displayName</a></code> | <code>string</code> | User defined name for the property. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.method">method</a></code> | <code>string</code> | Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType">occurrenceType</a></code> | <code>string</code> | Occurrence type limits the number of instances an entity type appears in the document. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the property. Follows the same guidelines as the EntityType name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#name GoogleDocumentAiSchemaVersion#name}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

A reference to the value type of the property.

This type is subject to the same conventions as the 'Entity.base_types' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#value_type GoogleDocumentAiSchemaVersion#value_type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User defined name for the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#method GoogleDocumentAiSchemaVersion#method}

---

##### `occurrenceType`<sup>Optional</sup> <a name="occurrenceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType"></a>

```typescript
public readonly occurrenceType: string;
```

- *Type:* string

Occurrence type limits the number of instances an entity type appears in the document.

Possible values: ["OPTIONAL_ONCE", "OPTIONAL_MULTIPLE", "REQUIRED_ONCE", "REQUIRED_MULTIPLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#occurrence_type GoogleDocumentAiSchemaVersion#occurrence_type}

---

### GoogleDocumentAiSchemaVersionSchemaMetadata <a name="GoogleDocumentAiSchemaVersionSchemaMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

const googleDocumentAiSchemaVersionSchemaMetadata: googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels">documentAllowMultipleLabels</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, on a given page, there can be multiple 'document' annotations covering it. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentSplitter">documentSplitter</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, a 'document' entity type can be applied to subdocument (splitting). |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties">prefixedNamingOnProperties</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set, all the nested entities must be prefixed with the parents. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation">skipNamingValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set, this will skip the naming format validation in the schema. |

---

##### `documentAllowMultipleLabels`<sup>Optional</sup> <a name="documentAllowMultipleLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels"></a>

```typescript
public readonly documentAllowMultipleLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, on a given page, there can be multiple 'document' annotations covering it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_allow_multiple_labels GoogleDocumentAiSchemaVersion#document_allow_multiple_labels}

---

##### `documentSplitter`<sup>Optional</sup> <a name="documentSplitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentSplitter"></a>

```typescript
public readonly documentSplitter: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, a 'document' entity type can be applied to subdocument (splitting).

Otherwise, it can only be applied to the entire document (classification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_splitter GoogleDocumentAiSchemaVersion#document_splitter}

---

##### `prefixedNamingOnProperties`<sup>Optional</sup> <a name="prefixedNamingOnProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties"></a>

```typescript
public readonly prefixedNamingOnProperties: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set, all the nested entities must be prefixed with the parents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#prefixed_naming_on_properties GoogleDocumentAiSchemaVersion#prefixed_naming_on_properties}

---

##### `skipNamingValidation`<sup>Optional</sup> <a name="skipNamingValidation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation"></a>

```typescript
public readonly skipNamingValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set, this will skip the naming format validation in the schema.

So the string values in 'DocumentSchema.EntityType.name' and 'DocumentSchema.EntityType.Property.name' will not be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#skip_naming_validation GoogleDocumentAiSchemaVersion#skip_naming_validation}

---

### GoogleDocumentAiSchemaVersionTimeouts <a name="GoogleDocumentAiSchemaVersionTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

const googleDocumentAiSchemaVersionTimeouts: googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#create GoogleDocumentAiSchemaVersion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#delete GoogleDocumentAiSchemaVersion#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#update GoogleDocumentAiSchemaVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#create GoogleDocumentAiSchemaVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#delete GoogleDocumentAiSchemaVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#update GoogleDocumentAiSchemaVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

new googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesList <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesList" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

new googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get"></a>

```typescript
public get(index: number): GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDocumentAiSchemaVersionSchemaEntityTypes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

new googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues">putEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes">resetBaseTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues">resetEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnumValues` <a name="putEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues"></a>

```typescript
public putEnumValues(value: GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties"></a>

```typescript
public putProperties(value: IResolvable | GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]

---

##### `resetBaseTypes` <a name="resetBaseTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes"></a>

```typescript
public resetBaseTypes(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnumValues` <a name="resetEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues"></a>

```typescript
public resetEnumValues(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues">enumValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput">baseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput">enumValuesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes">baseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enumValues`<sup>Required</sup> <a name="enumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues"></a>

```typescript
public readonly enumValues: GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties"></a>

```typescript
public readonly properties: GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a>

---

##### `baseTypesInput`<sup>Optional</sup> <a name="baseTypesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput"></a>

```typescript
public readonly baseTypesInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enumValuesInput`<sup>Optional</sup> <a name="enumValuesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput"></a>

```typescript
public readonly enumValuesInput: GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]

---

##### `baseTypes`<sup>Required</sup> <a name="baseTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes"></a>

```typescript
public readonly baseTypes: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDocumentAiSchemaVersionSchemaEntityTypes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

new googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get"></a>

```typescript
public get(index: number): GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

new googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType">resetOccurrenceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetOccurrenceType` <a name="resetOccurrenceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType"></a>

```typescript
public resetOccurrenceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput">occurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType">occurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `occurrenceTypeInput`<sup>Optional</sup> <a name="occurrenceTypeInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput"></a>

```typescript
public readonly occurrenceTypeInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `occurrenceType`<sup>Required</sup> <a name="occurrenceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType"></a>

```typescript
public readonly occurrenceType: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>

---


### GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

new googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels">resetDocumentAllowMultipleLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter">resetDocumentSplitter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties">resetPrefixedNamingOnProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation">resetSkipNamingValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDocumentAllowMultipleLabels` <a name="resetDocumentAllowMultipleLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels"></a>

```typescript
public resetDocumentAllowMultipleLabels(): void
```

##### `resetDocumentSplitter` <a name="resetDocumentSplitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter"></a>

```typescript
public resetDocumentSplitter(): void
```

##### `resetPrefixedNamingOnProperties` <a name="resetPrefixedNamingOnProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties"></a>

```typescript
public resetPrefixedNamingOnProperties(): void
```

##### `resetSkipNamingValidation` <a name="resetSkipNamingValidation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation"></a>

```typescript
public resetSkipNamingValidation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput">documentAllowMultipleLabelsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput">documentSplitterInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput">prefixedNamingOnPropertiesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput">skipNamingValidationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels">documentAllowMultipleLabels</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter">documentSplitter</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties">prefixedNamingOnProperties</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation">skipNamingValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `documentAllowMultipleLabelsInput`<sup>Optional</sup> <a name="documentAllowMultipleLabelsInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput"></a>

```typescript
public readonly documentAllowMultipleLabelsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `documentSplitterInput`<sup>Optional</sup> <a name="documentSplitterInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput"></a>

```typescript
public readonly documentSplitterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixedNamingOnPropertiesInput`<sup>Optional</sup> <a name="prefixedNamingOnPropertiesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput"></a>

```typescript
public readonly prefixedNamingOnPropertiesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `skipNamingValidationInput`<sup>Optional</sup> <a name="skipNamingValidationInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput"></a>

```typescript
public readonly skipNamingValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `documentAllowMultipleLabels`<sup>Required</sup> <a name="documentAllowMultipleLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels"></a>

```typescript
public readonly documentAllowMultipleLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `documentSplitter`<sup>Required</sup> <a name="documentSplitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter"></a>

```typescript
public readonly documentSplitter: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixedNamingOnProperties`<sup>Required</sup> <a name="prefixedNamingOnProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties"></a>

```typescript
public readonly prefixedNamingOnProperties: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `skipNamingValidation`<sup>Required</sup> <a name="skipNamingValidation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation"></a>

```typescript
public readonly skipNamingValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDocumentAiSchemaVersionSchemaMetadata;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---


### GoogleDocumentAiSchemaVersionSchemaOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

new googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes">putEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt">resetDocumentPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes">resetEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityTypes` <a name="putEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes"></a>

```typescript
public putEntityTypes(value: IResolvable | GoogleDocumentAiSchemaVersionSchemaEntityTypes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata"></a>

```typescript
public putMetadata(value: GoogleDocumentAiSchemaVersionSchemaMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDocumentPrompt` <a name="resetDocumentPrompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt"></a>

```typescript
public resetDocumentPrompt(): void
```

##### `resetEntityTypes` <a name="resetEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes"></a>

```typescript
public resetEntityTypes(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference">GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput">documentPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput">entityTypesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt">documentPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypes"></a>

```typescript
public readonly entityTypes: GoogleDocumentAiSchemaVersionSchemaEntityTypesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadata"></a>

```typescript
public readonly metadata: GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference">GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `documentPromptInput`<sup>Optional</sup> <a name="documentPromptInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput"></a>

```typescript
public readonly documentPromptInput: string;
```

- *Type:* string

---

##### `entityTypesInput`<sup>Optional</sup> <a name="entityTypesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput"></a>

```typescript
public readonly entityTypesInput: IResolvable | GoogleDocumentAiSchemaVersionSchemaEntityTypes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: GoogleDocumentAiSchemaVersionSchemaMetadata;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `documentPrompt`<sup>Required</sup> <a name="documentPrompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt"></a>

```typescript
public readonly documentPrompt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDocumentAiSchemaVersionSchema;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---


### GoogleDocumentAiSchemaVersionTimeoutsOutputReference <a name="GoogleDocumentAiSchemaVersionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDocumentAiSchemaVersion } from '@cdktn/provider-google-beta'

new googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDocumentAiSchemaVersionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

---



