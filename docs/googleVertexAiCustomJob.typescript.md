# `googleVertexAiCustomJob` Submodule <a name="`googleVertexAiCustomJob` Submodule" id="@cdktn/provider-google-beta.googleVertexAiCustomJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiCustomJob <a name="GoogleVertexAiCustomJob" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job google_vertex_ai_custom_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJob(scope: Construct, id: string, config: GoogleVertexAiCustomJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig">GoogleVertexAiCustomJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig">GoogleVertexAiCustomJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec">putJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putEncryptionSpec"></a>

```typescript
public putEncryptionSpec(value: GoogleVertexAiCustomJobEncryptionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a>

---

##### `putJobSpec` <a name="putJobSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec"></a>

```typescript
public putJobSpec(value: GoogleVertexAiCustomJobJobSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiCustomJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetEncryptionSpec"></a>

```typescript
public resetEncryptionSpec(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiCustomJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isConstruct"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

googleVertexAiCustomJob.GoogleVertexAiCustomJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformElement"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformResource"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVertexAiCustomJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiCustomJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiCustomJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiCustomJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference">GoogleVertexAiCustomJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList">GoogleVertexAiCustomJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.jobSpec">jobSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference">GoogleVertexAiCustomJobJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference">GoogleVertexAiCustomJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.webAccessUris">webAccessUris</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.jobSpecInput">jobSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleVertexAiCustomJobEncryptionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference">GoogleVertexAiCustomJobEncryptionSpecOutputReference</a>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.error"></a>

```typescript
public readonly error: GoogleVertexAiCustomJobErrorList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList">GoogleVertexAiCustomJobErrorList</a>

---

##### `jobSpec`<sup>Required</sup> <a name="jobSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.jobSpec"></a>

```typescript
public readonly jobSpec: GoogleVertexAiCustomJobJobSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference">GoogleVertexAiCustomJobJobSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiCustomJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference">GoogleVertexAiCustomJobTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `webAccessUris`<sup>Required</sup> <a name="webAccessUris" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.webAccessUris"></a>

```typescript
public readonly webAccessUris: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.encryptionSpecInput"></a>

```typescript
public readonly encryptionSpecInput: GoogleVertexAiCustomJobEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobSpecInput`<sup>Optional</sup> <a name="jobSpecInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.jobSpecInput"></a>

```typescript
public readonly jobSpecInput: GoogleVertexAiCustomJobJobSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiCustomJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiCustomJobConfig <a name="GoogleVertexAiCustomJobConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobConfig: googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the CustomJob. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.jobSpec">jobSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.region">region</a></code> | <code>string</code> | The Google Cloud region to run the custom job in. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#id GoogleVertexAiCustomJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels with user-defined metadata to organize CustomJobs. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#project GoogleVertexAiCustomJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the CustomJob.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#display_name GoogleVertexAiCustomJob#display_name}

---

##### `jobSpec`<sup>Required</sup> <a name="jobSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.jobSpec"></a>

```typescript
public readonly jobSpec: GoogleVertexAiCustomJobJobSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#job_spec GoogleVertexAiCustomJob#job_spec}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Google Cloud region to run the custom job in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#region GoogleVertexAiCustomJob#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#deletion_policy GoogleVertexAiCustomJob#deletion_policy}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleVertexAiCustomJobEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#encryption_spec GoogleVertexAiCustomJob#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#id GoogleVertexAiCustomJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels with user-defined metadata to organize CustomJobs.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed.
See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#labels GoogleVertexAiCustomJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#project GoogleVertexAiCustomJob#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiCustomJobTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#timeouts GoogleVertexAiCustomJob#timeouts}

---

### GoogleVertexAiCustomJobEncryptionSpec <a name="GoogleVertexAiCustomJobEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobEncryptionSpec: googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#kms_key_name GoogleVertexAiCustomJob#kms_key_name}

---

### GoogleVertexAiCustomJobError <a name="GoogleVertexAiCustomJobError" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobError.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobError: googleVertexAiCustomJob.GoogleVertexAiCustomJobError = { ... }
```


### GoogleVertexAiCustomJobJobSpec <a name="GoogleVertexAiCustomJobJobSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpec: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.workerPoolSpecs">workerPoolSpecs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]</code> | worker_pool_specs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.baseOutputDirectory">baseOutputDirectory</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | base_output_directory block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.enableDashboardAccess">enableDashboardAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether you want Vertex AI to enable access to the customized dashboard in training chief container. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.enableWebAccess">enableWebAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether you want Vertex AI to enable interactive shell access to training containers. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.network">network</a></code> | <code>string</code> | The full name of the Compute Engine network to which the Job should be peered. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.pscInterfaceConfig">pscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.reservedIpRanges">reservedIpRanges</a></code> | <code>string[]</code> | A list of names for the reserved ip ranges under the VPC network that can be used for this job. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.scheduling">scheduling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Specifies the service account for workload run-as account. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.tensorboard">tensorboard</a></code> | <code>string</code> | The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs. |

---

##### `workerPoolSpecs`<sup>Required</sup> <a name="workerPoolSpecs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.workerPoolSpecs"></a>

```typescript
public readonly workerPoolSpecs: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]

worker_pool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#worker_pool_specs GoogleVertexAiCustomJob#worker_pool_specs}

---

##### `baseOutputDirectory`<sup>Optional</sup> <a name="baseOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.baseOutputDirectory"></a>

```typescript
public readonly baseOutputDirectory: GoogleVertexAiCustomJobJobSpecBaseOutputDirectory;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a>

base_output_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#base_output_directory GoogleVertexAiCustomJob#base_output_directory}

---

##### `enableDashboardAccess`<sup>Optional</sup> <a name="enableDashboardAccess" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.enableDashboardAccess"></a>

```typescript
public readonly enableDashboardAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether you want Vertex AI to enable access to the customized dashboard in training chief container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#enable_dashboard_access GoogleVertexAiCustomJob#enable_dashboard_access}

---

##### `enableWebAccess`<sup>Optional</sup> <a name="enableWebAccess" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.enableWebAccess"></a>

```typescript
public readonly enableWebAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether you want Vertex AI to enable interactive shell access to training containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#enable_web_access GoogleVertexAiCustomJob#enable_web_access}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The full name of the Compute Engine network to which the Job should be peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#network GoogleVertexAiCustomJob#network}

---

##### `pscInterfaceConfig`<sup>Optional</sup> <a name="pscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.pscInterfaceConfig"></a>

```typescript
public readonly pscInterfaceConfig: GoogleVertexAiCustomJobJobSpecPscInterfaceConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#psc_interface_config GoogleVertexAiCustomJob#psc_interface_config}

---

##### `reservedIpRanges`<sup>Optional</sup> <a name="reservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.reservedIpRanges"></a>

```typescript
public readonly reservedIpRanges: string[];
```

- *Type:* string[]

A list of names for the reserved ip ranges under the VPC network that can be used for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reserved_ip_ranges GoogleVertexAiCustomJob#reserved_ip_ranges}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.scheduling"></a>

```typescript
public readonly scheduling: GoogleVertexAiCustomJobJobSpecScheduling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#scheduling GoogleVertexAiCustomJob#scheduling}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Specifies the service account for workload run-as account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#service_account GoogleVertexAiCustomJob#service_account}

---

##### `tensorboard`<sup>Optional</sup> <a name="tensorboard" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.tensorboard"></a>

```typescript
public readonly tensorboard: string;
```

- *Type:* string

The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#tensorboard GoogleVertexAiCustomJob#tensorboard}

---

### GoogleVertexAiCustomJobJobSpecBaseOutputDirectory <a name="GoogleVertexAiCustomJobJobSpecBaseOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecBaseOutputDirectory: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory.property.outputUriPrefix">outputUriPrefix</a></code> | <code>string</code> | Cloud Storage folder URL to store the output. |

---

##### `outputUriPrefix`<sup>Required</sup> <a name="outputUriPrefix" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory.property.outputUriPrefix"></a>

```typescript
public readonly outputUriPrefix: string;
```

- *Type:* string

Cloud Storage folder URL to store the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#output_uri_prefix GoogleVertexAiCustomJob#output_uri_prefix}

---

### GoogleVertexAiCustomJobJobSpecPscInterfaceConfig <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecPscInterfaceConfig: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.property.dnsPeeringConfigs">dnsPeeringConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | The name of the attachment to connect to. |

---

##### `dnsPeeringConfigs`<sup>Optional</sup> <a name="dnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```typescript
public readonly dnsPeeringConfigs: IResolvable | GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#dns_peering_configs GoogleVertexAiCustomJob#dns_peering_configs}

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

The name of the attachment to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#network_attachment GoogleVertexAiCustomJob#network_attachment}

---

### GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.domain">domain</a></code> | <code>string</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">targetNetwork</a></code> | <code>string</code> | The VPC network name in the target_project where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject">targetProject</a></code> | <code>string</code> | The project ID hosting the Cloud DNS managed zone that contains the 'domain'. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#domain GoogleVertexAiCustomJob#domain}

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```typescript
public readonly targetNetwork: string;
```

- *Type:* string

The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#target_network GoogleVertexAiCustomJob#target_network}

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```typescript
public readonly targetProject: string;
```

- *Type:* string

The project ID hosting the Cloud DNS managed zone that contains the 'domain'.

The Vertex AI Service Agent requires the dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#target_project GoogleVertexAiCustomJob#target_project}

---

### GoogleVertexAiCustomJobJobSpecScheduling <a name="GoogleVertexAiCustomJobJobSpecScheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecScheduling: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.disableRetries">disableRetries</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if the job should retry for internal errors after the job starts running. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.maxWaitDuration">maxWaitDuration</a></code> | <code>string</code> | The maximum duration that a job will wait for the requested resources to be provisioned if the scheduling strategy is set to FLEX_START. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.restartJobOnWorkerRestart">restartJobOnWorkerRestart</a></code> | <code>boolean \| cdktn.IResolvable</code> | Restarts the entire CustomJob if a worker gets restarted. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.strategy">strategy</a></code> | <code>string</code> | This determines which type of scheduling strategy to use. Possible values: ["STANDARD", "SPOT", "FLEX_START"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.timeout">timeout</a></code> | <code>string</code> | The maximum job running time. |

---

##### `disableRetries`<sup>Optional</sup> <a name="disableRetries" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.disableRetries"></a>

```typescript
public readonly disableRetries: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if the job should retry for internal errors after the job starts running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#disable_retries GoogleVertexAiCustomJob#disable_retries}

---

##### `maxWaitDuration`<sup>Optional</sup> <a name="maxWaitDuration" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.maxWaitDuration"></a>

```typescript
public readonly maxWaitDuration: string;
```

- *Type:* string

The maximum duration that a job will wait for the requested resources to be provisioned if the scheduling strategy is set to FLEX_START.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#max_wait_duration GoogleVertexAiCustomJob#max_wait_duration}

---

##### `restartJobOnWorkerRestart`<sup>Optional</sup> <a name="restartJobOnWorkerRestart" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.restartJobOnWorkerRestart"></a>

```typescript
public readonly restartJobOnWorkerRestart: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Restarts the entire CustomJob if a worker gets restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#restart_job_on_worker_restart GoogleVertexAiCustomJob#restart_job_on_worker_restart}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

This determines which type of scheduling strategy to use. Possible values: ["STANDARD", "SPOT", "FLEX_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#strategy GoogleVertexAiCustomJob#strategy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

The maximum job running time.

The default is 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#timeout GoogleVertexAiCustomJob#timeout}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecWorkerPoolSpecs: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.diskSpec">diskSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.lustreMounts">lustreMounts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]</code> | lustre_mounts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.nfsMounts">nfsMounts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]</code> | nfs_mounts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.pythonPackageSpec">pythonPackageSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | python_package_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.replicaCount">replicaCount</a></code> | <code>number</code> | The number of worker replicas to use for this worker pool. |

---

##### `containerSpec`<sup>Optional</sup> <a name="containerSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.containerSpec"></a>

```typescript
public readonly containerSpec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#container_spec GoogleVertexAiCustomJob#container_spec}

---

##### `diskSpec`<sup>Optional</sup> <a name="diskSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.diskSpec"></a>

```typescript
public readonly diskSpec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#disk_spec GoogleVertexAiCustomJob#disk_spec}

---

##### `lustreMounts`<sup>Optional</sup> <a name="lustreMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.lustreMounts"></a>

```typescript
public readonly lustreMounts: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]

lustre_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#lustre_mounts GoogleVertexAiCustomJob#lustre_mounts}

---

##### `machineSpec`<sup>Optional</sup> <a name="machineSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.machineSpec"></a>

```typescript
public readonly machineSpec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#machine_spec GoogleVertexAiCustomJob#machine_spec}

---

##### `nfsMounts`<sup>Optional</sup> <a name="nfsMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.nfsMounts"></a>

```typescript
public readonly nfsMounts: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]

nfs_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#nfs_mounts GoogleVertexAiCustomJob#nfs_mounts}

---

##### `pythonPackageSpec`<sup>Optional</sup> <a name="pythonPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.pythonPackageSpec"></a>

```typescript
public readonly pythonPackageSpec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

python_package_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#python_package_spec GoogleVertexAiCustomJob#python_package_spec}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

The number of worker replicas to use for this worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#replica_count GoogleVertexAiCustomJob#replica_count}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.imageUri">imageUri</a></code> | <code>string</code> | The URI of a container image in the Container Registry that is to be run on each worker replica. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.args">args</a></code> | <code>string[]</code> | The arguments to be passed when starting the container. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.command">command</a></code> | <code>string[]</code> | The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.env">env</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]</code> | env block. |

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

The URI of a container image in the Container Registry that is to be run on each worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#image_uri GoogleVertexAiCustomJob#image_uri}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

The arguments to be passed when starting the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#args GoogleVertexAiCustomJob#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#command GoogleVertexAiCustomJob#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.env"></a>

```typescript
public readonly env: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#env GoogleVertexAiCustomJob#env}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.name">name</a></code> | <code>string</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.value">value</a></code> | <code>string</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#name GoogleVertexAiCustomJob#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#value GoogleVertexAiCustomJob#value}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>number</code> | Size in GB of the boot disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskType">bootDiskType</a></code> | <code>string</code> | Type of the disk. |

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskSizeGb"></a>

```typescript
public readonly bootDiskSizeGb: number;
```

- *Type:* number

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#boot_disk_size_gb GoogleVertexAiCustomJob#boot_disk_size_gb}

---

##### `bootDiskType`<sup>Optional</sup> <a name="bootDiskType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskType"></a>

```typescript
public readonly bootDiskType: string;
```

- *Type:* string

Type of the disk.

The default value depends on the machine type. Valid values include: "pd-ssd", "pd-standard", "pd-balanced", and "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#boot_disk_type GoogleVertexAiCustomJob#boot_disk_type}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.filesystem">filesystem</a></code> | <code>string</code> | The name of the Lustre filesystem. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.instanceIp">instanceIp</a></code> | <code>string</code> | IP address of the Lustre instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.mountPoint">mountPoint</a></code> | <code>string</code> | Destination mount path. The Lustre file system will be mounted for the user under /mnt/lustre/<mount_point>. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.volumeHandle">volumeHandle</a></code> | <code>string</code> | The unique identifier of the Lustre volume. |

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.filesystem"></a>

```typescript
public readonly filesystem: string;
```

- *Type:* string

The name of the Lustre filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#filesystem GoogleVertexAiCustomJob#filesystem}

---

##### `instanceIp`<sup>Required</sup> <a name="instanceIp" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.instanceIp"></a>

```typescript
public readonly instanceIp: string;
```

- *Type:* string

IP address of the Lustre instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#instance_ip GoogleVertexAiCustomJob#instance_ip}

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Destination mount path. The Lustre file system will be mounted for the user under /mnt/lustre/<mount_point>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#mount_point GoogleVertexAiCustomJob#mount_point}

---

##### `volumeHandle`<sup>Required</sup> <a name="volumeHandle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.volumeHandle"></a>

```typescript
public readonly volumeHandle: string;
```

- *Type:* string

The unique identifier of the Lustre volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#volume_handle GoogleVertexAiCustomJob#volume_handle}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorCount">acceleratorCount</a></code> | <code>number</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | The type of accelerator(s) that may be attached to the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.machineType">machineType</a></code> | <code>string</code> | The type of the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.tpuTopology">tpuTopology</a></code> | <code>string</code> | The topology of the TPUs. |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: number;
```

- *Type:* number

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#accelerator_count GoogleVertexAiCustomJob#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

The type of accelerator(s) that may be attached to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#accelerator_type GoogleVertexAiCustomJob#accelerator_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The type of the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#machine_type GoogleVertexAiCustomJob#machine_type}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reservation_affinity GoogleVertexAiCustomJob#reservation_affinity}

---

##### `tpuTopology`<sup>Optional</sup> <a name="tpuTopology" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.tpuTopology"></a>

```typescript
public readonly tpuTopology: string;
```

- *Type:* string

The topology of the TPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#tpu_topology GoogleVertexAiCustomJob#tpu_topology}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.reservationAffinityType">reservationAffinityType</a></code> | <code>string</code> | Specifies the reservation affinity type. Possible values: "NO_RESERVATION", "ANY_RESERVATION", and "SPECIFIC_RESERVATION". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.key">key</a></code> | <code>string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.values">values</a></code> | <code>string[]</code> | Corresponds to the label values of a reservation resource. |

---

##### `reservationAffinityType`<sup>Required</sup> <a name="reservationAffinityType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.reservationAffinityType"></a>

```typescript
public readonly reservationAffinityType: string;
```

- *Type:* string

Specifies the reservation affinity type. Possible values: "NO_RESERVATION", "ANY_RESERVATION", and "SPECIFIC_RESERVATION".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reservation_affinity_type GoogleVertexAiCustomJob#reservation_affinity_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Corresponds to the label key of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#key GoogleVertexAiCustomJob#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#values GoogleVertexAiCustomJob#values}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.mountPoint">mountPoint</a></code> | <code>string</code> | Destination mount path. The path must be absolute. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.path">path</a></code> | <code>string</code> | Source path exported from NFS database. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.server">server</a></code> | <code>string</code> | IP address of the NFS server. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Destination mount path. The path must be absolute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#mount_point GoogleVertexAiCustomJob#mount_point}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Source path exported from NFS database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#path GoogleVertexAiCustomJob#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#server GoogleVertexAiCustomJob#server}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.executorImageUri">executorImageUri</a></code> | <code>string</code> | The URI of a container image in Artifact Registry that will run the provided Python package. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.packageUris">packageUris</a></code> | <code>string[]</code> | The Google Cloud Storage location of the Python package files which are the training program and its dependent packages. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.pythonModule">pythonModule</a></code> | <code>string</code> | The Python module name to run after installing the packages. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.args">args</a></code> | <code>string[]</code> | Command line arguments to be passed to the Python task. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.env">env</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]</code> | env block. |

---

##### `executorImageUri`<sup>Required</sup> <a name="executorImageUri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.executorImageUri"></a>

```typescript
public readonly executorImageUri: string;
```

- *Type:* string

The URI of a container image in Artifact Registry that will run the provided Python package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#executor_image_uri GoogleVertexAiCustomJob#executor_image_uri}

---

##### `packageUris`<sup>Required</sup> <a name="packageUris" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.packageUris"></a>

```typescript
public readonly packageUris: string[];
```

- *Type:* string[]

The Google Cloud Storage location of the Python package files which are the training program and its dependent packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#package_uris GoogleVertexAiCustomJob#package_uris}

---

##### `pythonModule`<sup>Required</sup> <a name="pythonModule" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.pythonModule"></a>

```typescript
public readonly pythonModule: string;
```

- *Type:* string

The Python module name to run after installing the packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#python_module GoogleVertexAiCustomJob#python_module}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Command line arguments to be passed to the Python task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#args GoogleVertexAiCustomJob#args}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.env"></a>

```typescript
public readonly env: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#env GoogleVertexAiCustomJob#env}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv: googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.name">name</a></code> | <code>string</code> | Name of the environment variable. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.value">value</a></code> | <code>string</code> | Value of the environment variable. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#name GoogleVertexAiCustomJob#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#value GoogleVertexAiCustomJob#value}

---

### GoogleVertexAiCustomJobTimeouts <a name="GoogleVertexAiCustomJobTimeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

const googleVertexAiCustomJobTimeouts: googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#create GoogleVertexAiCustomJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#delete GoogleVertexAiCustomJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#update GoogleVertexAiCustomJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#create GoogleVertexAiCustomJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#delete GoogleVertexAiCustomJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#update GoogleVertexAiCustomJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiCustomJobEncryptionSpecOutputReference <a name="GoogleVertexAiCustomJobEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiCustomJobEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a>

---


### GoogleVertexAiCustomJobErrorList <a name="GoogleVertexAiCustomJobErrorList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.get"></a>

```typescript
public get(index: number): GoogleVertexAiCustomJobErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiCustomJobErrorOutputReference <a name="GoogleVertexAiCustomJobErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobError">GoogleVertexAiCustomJobError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiCustomJobError;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobError">GoogleVertexAiCustomJobError</a>

---


### GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference <a name="GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefixInput">outputUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefix">outputUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputUriPrefixInput`<sup>Optional</sup> <a name="outputUriPrefixInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefixInput"></a>

```typescript
public readonly outputUriPrefixInput: string;
```

- *Type:* string

---

##### `outputUriPrefix`<sup>Required</sup> <a name="outputUriPrefix" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefix"></a>

```typescript
public readonly outputUriPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiCustomJobJobSpecBaseOutputDirectory;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a>

---


### GoogleVertexAiCustomJobJobSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory">putBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig">putPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling">putScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs">putWorkerPoolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetBaseOutputDirectory">resetBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetEnableDashboardAccess">resetEnableDashboardAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetEnableWebAccess">resetEnableWebAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetPscInterfaceConfig">resetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetReservedIpRanges">resetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetScheduling">resetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetTensorboard">resetTensorboard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseOutputDirectory` <a name="putBaseOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory"></a>

```typescript
public putBaseOutputDirectory(value: GoogleVertexAiCustomJobJobSpecBaseOutputDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a>

---

##### `putPscInterfaceConfig` <a name="putPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig"></a>

```typescript
public putPscInterfaceConfig(value: GoogleVertexAiCustomJobJobSpecPscInterfaceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a>

---

##### `putScheduling` <a name="putScheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling"></a>

```typescript
public putScheduling(value: GoogleVertexAiCustomJobJobSpecScheduling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a>

---

##### `putWorkerPoolSpecs` <a name="putWorkerPoolSpecs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs"></a>

```typescript
public putWorkerPoolSpecs(value: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]

---

##### `resetBaseOutputDirectory` <a name="resetBaseOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetBaseOutputDirectory"></a>

```typescript
public resetBaseOutputDirectory(): void
```

##### `resetEnableDashboardAccess` <a name="resetEnableDashboardAccess" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetEnableDashboardAccess"></a>

```typescript
public resetEnableDashboardAccess(): void
```

##### `resetEnableWebAccess` <a name="resetEnableWebAccess" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetEnableWebAccess"></a>

```typescript
public resetEnableWebAccess(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetPscInterfaceConfig` <a name="resetPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetPscInterfaceConfig"></a>

```typescript
public resetPscInterfaceConfig(): void
```

##### `resetReservedIpRanges` <a name="resetReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetReservedIpRanges"></a>

```typescript
public resetReservedIpRanges(): void
```

##### `resetScheduling` <a name="resetScheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetScheduling"></a>

```typescript
public resetScheduling(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTensorboard` <a name="resetTensorboard" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetTensorboard"></a>

```typescript
public resetTensorboard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectory">baseOutputDirectory</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference">GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfig">pscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.scheduling">scheduling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference">GoogleVertexAiCustomJobJobSpecSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecs">workerPoolSpecs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectoryInput">baseOutputDirectoryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccessInput">enableDashboardAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableWebAccessInput">enableWebAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfigInput">pscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.reservedIpRangesInput">reservedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.schedulingInput">schedulingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.tensorboardInput">tensorboardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecsInput">workerPoolSpecsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccess">enableDashboardAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableWebAccess">enableWebAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.reservedIpRanges">reservedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.tensorboard">tensorboard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseOutputDirectory`<sup>Required</sup> <a name="baseOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectory"></a>

```typescript
public readonly baseOutputDirectory: GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference">GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference</a>

---

##### `pscInterfaceConfig`<sup>Required</sup> <a name="pscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfig"></a>

```typescript
public readonly pscInterfaceConfig: GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.scheduling"></a>

```typescript
public readonly scheduling: GoogleVertexAiCustomJobJobSpecSchedulingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference">GoogleVertexAiCustomJobJobSpecSchedulingOutputReference</a>

---

##### `workerPoolSpecs`<sup>Required</sup> <a name="workerPoolSpecs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecs"></a>

```typescript
public readonly workerPoolSpecs: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList</a>

---

##### `baseOutputDirectoryInput`<sup>Optional</sup> <a name="baseOutputDirectoryInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectoryInput"></a>

```typescript
public readonly baseOutputDirectoryInput: GoogleVertexAiCustomJobJobSpecBaseOutputDirectory;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a>

---

##### `enableDashboardAccessInput`<sup>Optional</sup> <a name="enableDashboardAccessInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccessInput"></a>

```typescript
public readonly enableDashboardAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableWebAccessInput`<sup>Optional</sup> <a name="enableWebAccessInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableWebAccessInput"></a>

```typescript
public readonly enableWebAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `pscInterfaceConfigInput`<sup>Optional</sup> <a name="pscInterfaceConfigInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfigInput"></a>

```typescript
public readonly pscInterfaceConfigInput: GoogleVertexAiCustomJobJobSpecPscInterfaceConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a>

---

##### `reservedIpRangesInput`<sup>Optional</sup> <a name="reservedIpRangesInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.reservedIpRangesInput"></a>

```typescript
public readonly reservedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `schedulingInput`<sup>Optional</sup> <a name="schedulingInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.schedulingInput"></a>

```typescript
public readonly schedulingInput: GoogleVertexAiCustomJobJobSpecScheduling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `tensorboardInput`<sup>Optional</sup> <a name="tensorboardInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.tensorboardInput"></a>

```typescript
public readonly tensorboardInput: string;
```

- *Type:* string

---

##### `workerPoolSpecsInput`<sup>Optional</sup> <a name="workerPoolSpecsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecsInput"></a>

```typescript
public readonly workerPoolSpecsInput: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]

---

##### `enableDashboardAccess`<sup>Required</sup> <a name="enableDashboardAccess" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccess"></a>

```typescript
public readonly enableDashboardAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableWebAccess`<sup>Required</sup> <a name="enableWebAccess" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableWebAccess"></a>

```typescript
public readonly enableWebAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `reservedIpRanges`<sup>Required</sup> <a name="reservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.reservedIpRanges"></a>

```typescript
public readonly reservedIpRanges: string[];
```

- *Type:* string[]

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `tensorboard`<sup>Required</sup> <a name="tensorboard" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.tensorboard"></a>

```typescript
public readonly tensorboard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiCustomJobJobSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a>

---


### GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]

---


### GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">targetNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">targetProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">targetNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">targetProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `targetNetworkInput`<sup>Optional</sup> <a name="targetNetworkInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```typescript
public readonly targetNetworkInput: string;
```

- *Type:* string

---

##### `targetProjectInput`<sup>Optional</sup> <a name="targetProjectInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```typescript
public readonly targetProjectInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```typescript
public readonly targetNetwork: string;
```

- *Type:* string

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```typescript
public readonly targetProject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>

---


### GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs">putDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">resetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsPeeringConfigs` <a name="putDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```typescript
public putDnsPeeringConfigs(value: IResolvable | GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `resetDnsPeeringConfigs` <a name="resetDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```typescript
public resetDnsPeeringConfigs(): void
```

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```typescript
public resetNetworkAttachment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">dnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">dnsPeeringConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsPeeringConfigs`<sup>Required</sup> <a name="dnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```typescript
public readonly dnsPeeringConfigs: GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `dnsPeeringConfigsInput`<sup>Optional</sup> <a name="dnsPeeringConfigsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```typescript
public readonly dnsPeeringConfigsInput: IResolvable | GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiCustomJobJobSpecPscInterfaceConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a>

---


### GoogleVertexAiCustomJobJobSpecSchedulingOutputReference <a name="GoogleVertexAiCustomJobJobSpecSchedulingOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetDisableRetries">resetDisableRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetMaxWaitDuration">resetMaxWaitDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetRestartJobOnWorkerRestart">resetRestartJobOnWorkerRestart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableRetries` <a name="resetDisableRetries" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetDisableRetries"></a>

```typescript
public resetDisableRetries(): void
```

##### `resetMaxWaitDuration` <a name="resetMaxWaitDuration" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetMaxWaitDuration"></a>

```typescript
public resetMaxWaitDuration(): void
```

##### `resetRestartJobOnWorkerRestart` <a name="resetRestartJobOnWorkerRestart" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetRestartJobOnWorkerRestart"></a>

```typescript
public resetRestartJobOnWorkerRestart(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetStrategy"></a>

```typescript
public resetStrategy(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetriesInput">disableRetriesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDurationInput">maxWaitDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestartInput">restartJobOnWorkerRestartInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetries">disableRetries</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDuration">maxWaitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestart">restartJobOnWorkerRestart</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableRetriesInput`<sup>Optional</sup> <a name="disableRetriesInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetriesInput"></a>

```typescript
public readonly disableRetriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxWaitDurationInput`<sup>Optional</sup> <a name="maxWaitDurationInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDurationInput"></a>

```typescript
public readonly maxWaitDurationInput: string;
```

- *Type:* string

---

##### `restartJobOnWorkerRestartInput`<sup>Optional</sup> <a name="restartJobOnWorkerRestartInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestartInput"></a>

```typescript
public readonly restartJobOnWorkerRestartInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `disableRetries`<sup>Required</sup> <a name="disableRetries" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetries"></a>

```typescript
public readonly disableRetries: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxWaitDuration`<sup>Required</sup> <a name="maxWaitDuration" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDuration"></a>

```typescript
public readonly maxWaitDuration: string;
```

- *Type:* string

---

##### `restartJobOnWorkerRestart`<sup>Required</sup> <a name="restartJobOnWorkerRestart" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestart"></a>

```typescript
public readonly restartJobOnWorkerRestart: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiCustomJobJobSpecScheduling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get"></a>

```typescript
public get(index: number): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetEnv">resetEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.envInput">envInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.env"></a>

```typescript
public readonly env: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUriInput"></a>

```typescript
public readonly imageUriInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskType">resetBootDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskSizeGb"></a>

```typescript
public resetBootDiskSizeGb(): void
```

##### `resetBootDiskType` <a name="resetBootDiskType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskType"></a>

```typescript
public resetBootDiskType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskTypeInput">bootDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskType">bootDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGbInput"></a>

```typescript
public readonly bootDiskSizeGbInput: number;
```

- *Type:* number

---

##### `bootDiskTypeInput`<sup>Optional</sup> <a name="bootDiskTypeInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskTypeInput"></a>

```typescript
public readonly bootDiskTypeInput: string;
```

- *Type:* string

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGb"></a>

```typescript
public readonly bootDiskSizeGb: number;
```

- *Type:* number

---

##### `bootDiskType`<sup>Required</sup> <a name="bootDiskType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskType"></a>

```typescript
public readonly bootDiskType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystemInput">filesystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIpInput">instanceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandleInput">volumeHandleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystem">filesystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIp">instanceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandle">volumeHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filesystemInput`<sup>Optional</sup> <a name="filesystemInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystemInput"></a>

```typescript
public readonly filesystemInput: string;
```

- *Type:* string

---

##### `instanceIpInput`<sup>Optional</sup> <a name="instanceIpInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIpInput"></a>

```typescript
public readonly instanceIpInput: string;
```

- *Type:* string

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `volumeHandleInput`<sup>Optional</sup> <a name="volumeHandleInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandleInput"></a>

```typescript
public readonly volumeHandleInput: string;
```

- *Type:* string

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystem"></a>

```typescript
public readonly filesystem: string;
```

- *Type:* string

---

##### `instanceIp`<sup>Required</sup> <a name="instanceIp" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIp"></a>

```typescript
public readonly instanceIp: string;
```

- *Type:* string

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `volumeHandle`<sup>Required</sup> <a name="volumeHandle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandle"></a>

```typescript
public readonly volumeHandle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetTpuTopology">resetTpuTopology</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity"></a>

```typescript
public putReservationAffinity(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorCount"></a>

```typescript
public resetAcceleratorCount(): void
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorType"></a>

```typescript
public resetAcceleratorType(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetReservationAffinity"></a>

```typescript
public resetReservationAffinity(): void
```

##### `resetTpuTopology` <a name="resetTpuTopology" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetTpuTopology"></a>

```typescript
public resetTpuTopology(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopologyInput">tpuTopologyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopology">tpuTopology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference</a>

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCountInput"></a>

```typescript
public readonly acceleratorCountInput: number;
```

- *Type:* number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinityInput"></a>

```typescript
public readonly reservationAffinityInput: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---

##### `tpuTopologyInput`<sup>Optional</sup> <a name="tpuTopologyInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopologyInput"></a>

```typescript
public readonly tpuTopologyInput: string;
```

- *Type:* string

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: number;
```

- *Type:* number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `tpuTopology`<sup>Required</sup> <a name="tpuTopology" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopology"></a>

```typescript
public readonly tpuTopology: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput">reservationAffinityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType">reservationAffinityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `reservationAffinityTypeInput`<sup>Optional</sup> <a name="reservationAffinityTypeInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput"></a>

```typescript
public readonly reservationAffinityTypeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `reservationAffinityType`<sup>Required</sup> <a name="reservationAffinityType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType"></a>

```typescript
public readonly reservationAffinityType: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec">putContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec">putDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts">putLustreMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec">putMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts">putNfsMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec">putPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetContainerSpec">resetContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetDiskSpec">resetDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetLustreMounts">resetLustreMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetMachineSpec">resetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetNfsMounts">resetNfsMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetPythonPackageSpec">resetPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerSpec` <a name="putContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec"></a>

```typescript
public putContainerSpec(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---

##### `putDiskSpec` <a name="putDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec"></a>

```typescript
public putDiskSpec(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---

##### `putLustreMounts` <a name="putLustreMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts"></a>

```typescript
public putLustreMounts(value: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]

---

##### `putMachineSpec` <a name="putMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec"></a>

```typescript
public putMachineSpec(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---

##### `putNfsMounts` <a name="putNfsMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts"></a>

```typescript
public putNfsMounts(value: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]

---

##### `putPythonPackageSpec` <a name="putPythonPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec"></a>

```typescript
public putPythonPackageSpec(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---

##### `resetContainerSpec` <a name="resetContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetContainerSpec"></a>

```typescript
public resetContainerSpec(): void
```

##### `resetDiskSpec` <a name="resetDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetDiskSpec"></a>

```typescript
public resetDiskSpec(): void
```

##### `resetLustreMounts` <a name="resetLustreMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetLustreMounts"></a>

```typescript
public resetLustreMounts(): void
```

##### `resetMachineSpec` <a name="resetMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetMachineSpec"></a>

```typescript
public resetMachineSpec(): void
```

##### `resetNfsMounts` <a name="resetNfsMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetNfsMounts"></a>

```typescript
public resetNfsMounts(): void
```

##### `resetPythonPackageSpec` <a name="resetPythonPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetPythonPackageSpec"></a>

```typescript
public resetPythonPackageSpec(): void
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetReplicaCount"></a>

```typescript
public resetReplicaCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpec">diskSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMounts">lustreMounts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMounts">nfsMounts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpec">pythonPackageSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpecInput">containerSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpecInput">diskSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMountsInput">lustreMountsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpecInput">machineSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMountsInput">nfsMountsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpecInput">pythonPackageSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCountInput">replicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCount">replicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerSpec`<sup>Required</sup> <a name="containerSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpec"></a>

```typescript
public readonly containerSpec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference</a>

---

##### `diskSpec`<sup>Required</sup> <a name="diskSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpec"></a>

```typescript
public readonly diskSpec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference</a>

---

##### `lustreMounts`<sup>Required</sup> <a name="lustreMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMounts"></a>

```typescript
public readonly lustreMounts: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList</a>

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpec"></a>

```typescript
public readonly machineSpec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference</a>

---

##### `nfsMounts`<sup>Required</sup> <a name="nfsMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMounts"></a>

```typescript
public readonly nfsMounts: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList</a>

---

##### `pythonPackageSpec`<sup>Required</sup> <a name="pythonPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpec"></a>

```typescript
public readonly pythonPackageSpec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference</a>

---

##### `containerSpecInput`<sup>Optional</sup> <a name="containerSpecInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpecInput"></a>

```typescript
public readonly containerSpecInput: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---

##### `diskSpecInput`<sup>Optional</sup> <a name="diskSpecInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpecInput"></a>

```typescript
public readonly diskSpecInput: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---

##### `lustreMountsInput`<sup>Optional</sup> <a name="lustreMountsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMountsInput"></a>

```typescript
public readonly lustreMountsInput: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]

---

##### `machineSpecInput`<sup>Optional</sup> <a name="machineSpecInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpecInput"></a>

```typescript
public readonly machineSpecInput: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---

##### `nfsMountsInput`<sup>Optional</sup> <a name="nfsMountsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMountsInput"></a>

```typescript
public readonly nfsMountsInput: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]

---

##### `pythonPackageSpecInput`<sup>Optional</sup> <a name="pythonPackageSpecInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpecInput"></a>

```typescript
public readonly pythonPackageSpecInput: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCountInput"></a>

```typescript
public readonly replicaCountInput: number;
```

- *Type:* number

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get"></a>

```typescript
public get(index: number): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetEnv">resetEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.envInput">envInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUriInput">executorImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUrisInput">packageUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModuleInput">pythonModuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUri">executorImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUris">packageUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModule">pythonModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.env"></a>

```typescript
public readonly env: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]

---

##### `executorImageUriInput`<sup>Optional</sup> <a name="executorImageUriInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUriInput"></a>

```typescript
public readonly executorImageUriInput: string;
```

- *Type:* string

---

##### `packageUrisInput`<sup>Optional</sup> <a name="packageUrisInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUrisInput"></a>

```typescript
public readonly packageUrisInput: string[];
```

- *Type:* string[]

---

##### `pythonModuleInput`<sup>Optional</sup> <a name="pythonModuleInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModuleInput"></a>

```typescript
public readonly pythonModuleInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `executorImageUri`<sup>Required</sup> <a name="executorImageUri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUri"></a>

```typescript
public readonly executorImageUri: string;
```

- *Type:* string

---

##### `packageUris`<sup>Required</sup> <a name="packageUris" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUris"></a>

```typescript
public readonly packageUris: string[];
```

- *Type:* string[]

---

##### `pythonModule`<sup>Required</sup> <a name="pythonModule" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModule"></a>

```typescript
public readonly pythonModule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---


### GoogleVertexAiCustomJobTimeoutsOutputReference <a name="GoogleVertexAiCustomJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiCustomJob } from '@cdktn/provider-google-beta'

new googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiCustomJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a>

---



