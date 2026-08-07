# `googleComputeBulkPerInstanceConfig` Submodule <a name="`googleComputeBulkPerInstanceConfig` Submodule" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeBulkPerInstanceConfig <a name="GoogleComputeBulkPerInstanceConfig" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config google_compute_bulk_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer"></a>

```typescript
import { googleComputeBulkPerInstanceConfig } from '@cdktn/provider-google-beta'

new googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig(scope: Construct, id: string, config: GoogleComputeBulkPerInstanceConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig">GoogleComputeBulkPerInstanceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig">GoogleComputeBulkPerInstanceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putInstances">putInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstances` <a name="putInstances" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putInstances"></a>

```typescript
public putInstances(value: IResolvable | GoogleComputeBulkPerInstanceConfigInstances[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putInstances.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeBulkPerInstanceConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstances` <a name="resetInstances" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetInstances"></a>

```typescript
public resetInstances(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeBulkPerInstanceConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isConstruct"></a>

```typescript
import { googleComputeBulkPerInstanceConfig } from '@cdktn/provider-google-beta'

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformElement"></a>

```typescript
import { googleComputeBulkPerInstanceConfig } from '@cdktn/provider-google-beta'

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformResource"></a>

```typescript
import { googleComputeBulkPerInstanceConfig } from '@cdktn/provider-google-beta'

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport"></a>

```typescript
import { googleComputeBulkPerInstanceConfig } from '@cdktn/provider-google-beta'

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeBulkPerInstanceConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeBulkPerInstanceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeBulkPerInstanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeBulkPerInstanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instances">instances</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList">GoogleComputeBulkPerInstanceConfigInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference">GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instanceGroupManagerInput">instanceGroupManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instancesInput">instancesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instanceGroupManager">instanceGroupManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instances"></a>

```typescript
public readonly instances: GoogleComputeBulkPerInstanceConfigInstancesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList">GoogleComputeBulkPerInstanceConfigInstancesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference">GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceGroupManagerInput`<sup>Optional</sup> <a name="instanceGroupManagerInput" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instanceGroupManagerInput"></a>

```typescript
public readonly instanceGroupManagerInput: string;
```

- *Type:* string

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instancesInput"></a>

```typescript
public readonly instancesInput: IResolvable | GoogleComputeBulkPerInstanceConfigInstances[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeBulkPerInstanceConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instanceGroupManager"></a>

```typescript
public readonly instanceGroupManager: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeBulkPerInstanceConfigConfig <a name="GoogleComputeBulkPerInstanceConfigConfig" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.Initializer"></a>

```typescript
import { googleComputeBulkPerInstanceConfig } from '@cdktn/provider-google-beta'

const googleComputeBulkPerInstanceConfigConfig: googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.instanceGroupManager">instanceGroupManager</a></code> | <code>string</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#id GoogleComputeBulkPerInstanceConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.instances">instances</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>[]</code> | instances block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#project GoogleComputeBulkPerInstanceConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.zone">zone</a></code> | <code>string</code> | Zone where the containing instance group manager is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.instanceGroupManager"></a>

```typescript
public readonly instanceGroupManager: string;
```

- *Type:* string

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#instance_group_manager GoogleComputeBulkPerInstanceConfig#instance_group_manager}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#deletion_policy GoogleComputeBulkPerInstanceConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#id GoogleComputeBulkPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.instances"></a>

```typescript
public readonly instances: IResolvable | GoogleComputeBulkPerInstanceConfigInstances[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>[]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#instances GoogleComputeBulkPerInstanceConfig#instances}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#project GoogleComputeBulkPerInstanceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeBulkPerInstanceConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#timeouts GoogleComputeBulkPerInstanceConfig#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#zone GoogleComputeBulkPerInstanceConfig#zone}

---

### GoogleComputeBulkPerInstanceConfigInstances <a name="GoogleComputeBulkPerInstanceConfigInstances" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances.Initializer"></a>

```typescript
import { googleComputeBulkPerInstanceConfig } from '@cdktn/provider-google-beta'

const googleComputeBulkPerInstanceConfigInstances: googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances.property.name">name</a></code> | <code>string</code> | The name for this per-instance config and its corresponding instance. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#name GoogleComputeBulkPerInstanceConfig#name}

---

### GoogleComputeBulkPerInstanceConfigTimeouts <a name="GoogleComputeBulkPerInstanceConfigTimeouts" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts.Initializer"></a>

```typescript
import { googleComputeBulkPerInstanceConfig } from '@cdktn/provider-google-beta'

const googleComputeBulkPerInstanceConfigTimeouts: googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#create GoogleComputeBulkPerInstanceConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#delete GoogleComputeBulkPerInstanceConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#create GoogleComputeBulkPerInstanceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_bulk_per_instance_config#delete GoogleComputeBulkPerInstanceConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeBulkPerInstanceConfigInstancesList <a name="GoogleComputeBulkPerInstanceConfigInstancesList" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer"></a>

```typescript
import { googleComputeBulkPerInstanceConfig } from '@cdktn/provider-google-beta'

new googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.get"></a>

```typescript
public get(index: number): GoogleComputeBulkPerInstanceConfigInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeBulkPerInstanceConfigInstances[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>[]

---


### GoogleComputeBulkPerInstanceConfigInstancesOutputReference <a name="GoogleComputeBulkPerInstanceConfigInstancesOutputReference" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer"></a>

```typescript
import { googleComputeBulkPerInstanceConfig } from '@cdktn/provider-google-beta'

new googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeBulkPerInstanceConfigInstances;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>

---


### GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference <a name="GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeBulkPerInstanceConfig } from '@cdktn/provider-google-beta'

new googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeBulkPerInstanceConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a>

---



