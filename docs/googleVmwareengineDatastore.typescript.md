# `googleVmwareengineDatastore` Submodule <a name="`googleVmwareengineDatastore` Submodule" id="@cdktn/provider-google-beta.googleVmwareengineDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineDatastore <a name="GoogleVmwareengineDatastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore google_vmwareengine_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

new googleVmwareengineDatastore.GoogleVmwareengineDatastore(scope: Construct, id: string, config: GoogleVmwareengineDatastoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig">GoogleVmwareengineDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig">GoogleVmwareengineDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putNfsDatastore">putNfsDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNfsDatastore` <a name="putNfsDatastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putNfsDatastore"></a>

```typescript
public putNfsDatastore(value: GoogleVmwareengineDatastoreNfsDatastore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putNfsDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVmwareengineDatastoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVmwareengineDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isConstruct"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

googleVmwareengineDatastore.GoogleVmwareengineDatastore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformElement"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformResource"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVmwareengineDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVmwareengineDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVmwareengineDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.clusters">clusters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nfsDatastore">nfsDatastore</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference">GoogleVmwareengineDatastoreNfsDatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference">GoogleVmwareengineDatastoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nfsDatastoreInput">nfsDatastoreInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.clusters"></a>

```typescript
public readonly clusters: string[];
```

- *Type:* string[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `nfsDatastore`<sup>Required</sup> <a name="nfsDatastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nfsDatastore"></a>

```typescript
public readonly nfsDatastore: GoogleVmwareengineDatastoreNfsDatastoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference">GoogleVmwareengineDatastoreNfsDatastoreOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVmwareengineDatastoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference">GoogleVmwareengineDatastoreTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nfsDatastoreInput`<sup>Optional</sup> <a name="nfsDatastoreInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nfsDatastoreInput"></a>

```typescript
public readonly nfsDatastoreInput: GoogleVmwareengineDatastoreNfsDatastore;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVmwareengineDatastoreTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineDatastoreConfig <a name="GoogleVmwareengineDatastoreConfig" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.Initializer"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

const googleVmwareengineDatastoreConfig: googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.name">name</a></code> | <code>string</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.nfsDatastore">nfsDatastore</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a></code> | nfs_datastore block. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.description">description</a></code> | <code>string</code> | User-provided description for this datastore. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#id GoogleVmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#project GoogleVmwareengineDatastore#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#location GoogleVmwareengineDatastore#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The user-provided identifier of the datastore to be created.

This identifier must be unique among each 'Datastore' within the parent
and becomes the final token in the name URI.
The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
(section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#name GoogleVmwareengineDatastore#name}

---

##### `nfsDatastore`<sup>Required</sup> <a name="nfsDatastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.nfsDatastore"></a>

```typescript
public readonly nfsDatastore: GoogleVmwareengineDatastoreNfsDatastore;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a>

nfs_datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#nfs_datastore GoogleVmwareengineDatastore#nfs_datastore}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#deletion_policy GoogleVmwareengineDatastore#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description for this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#description GoogleVmwareengineDatastore#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#id GoogleVmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#project GoogleVmwareengineDatastore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVmwareengineDatastoreTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#timeouts GoogleVmwareengineDatastore#timeouts}

---

### GoogleVmwareengineDatastoreNfsDatastore <a name="GoogleVmwareengineDatastoreNfsDatastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.Initializer"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

const googleVmwareengineDatastoreNfsDatastore: googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.property.googleFileService">googleFileService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | google_file_service block. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.property.thirdPartyFileService">thirdPartyFileService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | third_party_file_service block. |

---

##### `googleFileService`<sup>Optional</sup> <a name="googleFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.property.googleFileService"></a>

```typescript
public readonly googleFileService: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

google_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#google_file_service GoogleVmwareengineDatastore#google_file_service}

---

##### `thirdPartyFileService`<sup>Optional</sup> <a name="thirdPartyFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.property.thirdPartyFileService"></a>

```typescript
public readonly thirdPartyFileService: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

third_party_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#third_party_file_service GoogleVmwareengineDatastore#third_party_file_service}

---

### GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService <a name="GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.Initializer"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

const googleVmwareengineDatastoreNfsDatastoreGoogleFileService: googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance">filestoreInstance</a></code> | <code>string</code> | Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume">netappVolume</a></code> | <code>string</code> | Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume. |

---

##### `filestoreInstance`<sup>Optional</sup> <a name="filestoreInstance" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance"></a>

```typescript
public readonly filestoreInstance: string;
```

- *Type:* string

Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#filestore_instance GoogleVmwareengineDatastore#filestore_instance}

---

##### `netappVolume`<sup>Optional</sup> <a name="netappVolume" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume"></a>

```typescript
public readonly netappVolume: string;
```

- *Type:* string

Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#netapp_volume GoogleVmwareengineDatastore#netapp_volume}

---

### GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService <a name="GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.Initializer"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

const googleVmwareengineDatastoreNfsDatastoreThirdPartyFileService: googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare">fileShare</a></code> | <code>string</code> | Required Mount Folder name. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network">network</a></code> | <code>string</code> | Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers">servers</a></code> | <code>string[]</code> | Server IP addresses of the NFS file service. |

---

##### `fileShare`<sup>Required</sup> <a name="fileShare" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare"></a>

```typescript
public readonly fileShare: string;
```

- *Type:* string

Required Mount Folder name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#file_share GoogleVmwareengineDatastore#file_share}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#network GoogleVmwareengineDatastore#network}

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers"></a>

```typescript
public readonly servers: string[];
```

- *Type:* string[]

Server IP addresses of the NFS file service.

NFS v3, provide a single IP address or DNS name.
Multiple servers can be supported in future when NFS 4.1 protocol support
is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#servers GoogleVmwareengineDatastore#servers}

---

### GoogleVmwareengineDatastoreTimeouts <a name="GoogleVmwareengineDatastoreTimeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.Initializer"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

const googleVmwareengineDatastoreTimeouts: googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#create GoogleVmwareengineDatastore#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#delete GoogleVmwareengineDatastore#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#update GoogleVmwareengineDatastore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#create GoogleVmwareengineDatastore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#delete GoogleVmwareengineDatastore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vmwareengine_datastore#update GoogleVmwareengineDatastore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference <a name="GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

new googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance">resetFilestoreInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume">resetNetappVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilestoreInstance` <a name="resetFilestoreInstance" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance"></a>

```typescript
public resetFilestoreInstance(): void
```

##### `resetNetappVolume` <a name="resetNetappVolume" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume"></a>

```typescript
public resetNetappVolume(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput">filestoreInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput">netappVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance">filestoreInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume">netappVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filestoreInstanceInput`<sup>Optional</sup> <a name="filestoreInstanceInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput"></a>

```typescript
public readonly filestoreInstanceInput: string;
```

- *Type:* string

---

##### `netappVolumeInput`<sup>Optional</sup> <a name="netappVolumeInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput"></a>

```typescript
public readonly netappVolumeInput: string;
```

- *Type:* string

---

##### `filestoreInstance`<sup>Required</sup> <a name="filestoreInstance" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance"></a>

```typescript
public readonly filestoreInstance: string;
```

- *Type:* string

---

##### `netappVolume`<sup>Required</sup> <a name="netappVolume" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume"></a>

```typescript
public readonly netappVolume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---


### GoogleVmwareengineDatastoreNfsDatastoreOutputReference <a name="GoogleVmwareengineDatastoreNfsDatastoreOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

new googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService">putGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService">putThirdPartyFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService">resetGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService">resetThirdPartyFileService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGoogleFileService` <a name="putGoogleFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService"></a>

```typescript
public putGoogleFileService(value: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---

##### `putThirdPartyFileService` <a name="putThirdPartyFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService"></a>

```typescript
public putThirdPartyFileService(value: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---

##### `resetGoogleFileService` <a name="resetGoogleFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService"></a>

```typescript
public resetGoogleFileService(): void
```

##### `resetThirdPartyFileService` <a name="resetThirdPartyFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService"></a>

```typescript
public resetThirdPartyFileService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService">googleFileService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService">thirdPartyFileService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput">googleFileServiceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput">thirdPartyFileServiceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `googleFileService`<sup>Required</sup> <a name="googleFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService"></a>

```typescript
public readonly googleFileService: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a>

---

##### `thirdPartyFileService`<sup>Required</sup> <a name="thirdPartyFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService"></a>

```typescript
public readonly thirdPartyFileService: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a>

---

##### `googleFileServiceInput`<sup>Optional</sup> <a name="googleFileServiceInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput"></a>

```typescript
public readonly googleFileServiceInput: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---

##### `thirdPartyFileServiceInput`<sup>Optional</sup> <a name="thirdPartyFileServiceInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput"></a>

```typescript
public readonly thirdPartyFileServiceInput: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareengineDatastoreNfsDatastore;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a>

---


### GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference <a name="GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

new googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput">fileShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput">serversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare">fileShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers">servers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileShareInput`<sup>Optional</sup> <a name="fileShareInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput"></a>

```typescript
public readonly fileShareInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `serversInput`<sup>Optional</sup> <a name="serversInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput"></a>

```typescript
public readonly serversInput: string[];
```

- *Type:* string[]

---

##### `fileShare`<sup>Required</sup> <a name="fileShare" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare"></a>

```typescript
public readonly fileShare: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers"></a>

```typescript
public readonly servers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---


### GoogleVmwareengineDatastoreTimeoutsOutputReference <a name="GoogleVmwareengineDatastoreTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineDatastore } from '@cdktn/provider-google-beta'

new googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareengineDatastoreTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a>

---



