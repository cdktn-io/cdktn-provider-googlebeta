# `googleDataLineageOpenLineageJob` Submodule <a name="`googleDataLineageOpenLineageJob` Submodule" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataLineageOpenLineageJob <a name="GoogleDataLineageOpenLineageJob" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job google_data_lineage_open_lineage_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob(scope: Construct, id: string, config: GoogleDataLineageOpenLineageJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig">GoogleDataLineageOpenLineageJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig">GoogleDataLineageOpenLineageJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInput` <a name="putInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput"></a>

```typescript
public putInput(value: IResolvable | GoogleDataLineageOpenLineageJobInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]

---

##### `putOutput` <a name="putOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput"></a>

```typescript
public putOutput(value: IResolvable | GoogleDataLineageOpenLineageJobOutput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataLineageOpenLineageJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInput` <a name="resetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetOutput` <a name="resetOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOutput"></a>

```typescript
public resetOutput(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataLineageOpenLineageJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataLineageOpenLineageJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataLineageOpenLineageJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.input">input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList">GoogleDataLineageOpenLineageJobInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.output">output</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList">GoogleDataLineageOpenLineageJobOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.process">process</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.run">run</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference">GoogleDataLineageOpenLineageJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.inputInput">inputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.outputInput">outputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.input"></a>

```typescript
public readonly input: GoogleDataLineageOpenLineageJobInputList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList">GoogleDataLineageOpenLineageJobInputList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.output"></a>

```typescript
public readonly output: GoogleDataLineageOpenLineageJobOutputList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList">GoogleDataLineageOpenLineageJobOutputList</a>

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.process"></a>

```typescript
public readonly process: string;
```

- *Type:* string

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.run"></a>

```typescript
public readonly run: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataLineageOpenLineageJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference">GoogleDataLineageOpenLineageJobTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.inputInput"></a>

```typescript
public readonly inputInput: IResolvable | GoogleDataLineageOpenLineageJobInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.outputInput"></a>

```typescript
public readonly outputInput: IResolvable | GoogleDataLineageOpenLineageJobOutput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataLineageOpenLineageJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataLineageOpenLineageJobConfig <a name="GoogleDataLineageOpenLineageJobConfig" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobConfig: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.name">name</a></code> | <code>string</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.description">description</a></code> | <code>string</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.input">input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]</code> | input block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.output">output</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]</code> | output block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#deletion_policy GoogleDataLineageOpenLineageJob#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#description GoogleDataLineageOpenLineageJob#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.input"></a>

```typescript
public readonly input: IResolvable | GoogleDataLineageOpenLineageJobInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.output"></a>

```typescript
public readonly output: IResolvable | GoogleDataLineageOpenLineageJobOutput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#output GoogleDataLineageOpenLineageJob#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataLineageOpenLineageJobTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#timeouts GoogleDataLineageOpenLineageJob#timeouts}

---

### GoogleDataLineageOpenLineageJobInput <a name="GoogleDataLineageOpenLineageJobInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobInput: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.name">name</a></code> | <code>string</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.symlink">symlink</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]</code> | symlink block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.catalog"></a>

```typescript
public readonly catalog: GoogleDataLineageOpenLineageJobInputCatalog;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#catalog GoogleDataLineageOpenLineageJob#catalog}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.symlink"></a>

```typescript
public readonly symlink: IResolvable | GoogleDataLineageOpenLineageJobInputSymlink[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#symlink GoogleDataLineageOpenLineageJob#symlink}

---

### GoogleDataLineageOpenLineageJobInputCatalog <a name="GoogleDataLineageOpenLineageJobInputCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobInputCatalog: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.framework">framework</a></code> | <code>string</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.name">name</a></code> | <code>string</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.type">type</a></code> | <code>string</code> | Catalog entity type. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobInputSymlink <a name="GoogleDataLineageOpenLineageJobInputSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobInputSymlink: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.name">name</a></code> | <code>string</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.type">type</a></code> | <code>string</code> | Type of the symlink target. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobOutput <a name="GoogleDataLineageOpenLineageJobOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobOutput: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.name">name</a></code> | <code>string</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.columnLineage">columnLineage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | column_lineage block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.symlink">symlink</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]</code> | symlink block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.catalog"></a>

```typescript
public readonly catalog: GoogleDataLineageOpenLineageJobOutputCatalog;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#catalog GoogleDataLineageOpenLineageJob#catalog}

---

##### `columnLineage`<sup>Optional</sup> <a name="columnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.columnLineage"></a>

```typescript
public readonly columnLineage: GoogleDataLineageOpenLineageJobOutputColumnLineage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

column_lineage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#column_lineage GoogleDataLineageOpenLineageJob#column_lineage}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.symlink"></a>

```typescript
public readonly symlink: IResolvable | GoogleDataLineageOpenLineageJobOutputSymlink[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#symlink GoogleDataLineageOpenLineageJob#symlink}

---

### GoogleDataLineageOpenLineageJobOutputCatalog <a name="GoogleDataLineageOpenLineageJobOutputCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobOutputCatalog: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.framework">framework</a></code> | <code>string</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.name">name</a></code> | <code>string</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.type">type</a></code> | <code>string</code> | Catalog entity type. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineage <a name="GoogleDataLineageOpenLineageJobOutputColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobOutputColumnLineage: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.field">field</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]</code> | field block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.datasetInput">datasetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]</code> | dataset_input block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.field"></a>

```typescript
public readonly field: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageField[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.datasetInput"></a>

```typescript
public readonly datasetInput: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

dataset_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#dataset_input GoogleDataLineageOpenLineageJob#dataset_input}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobOutputColumnLineageDatasetInput: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field">field</a></code> | <code>string</code> | Source field name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name">name</a></code> | <code>string</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation">transformation</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]</code> | transformation block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation"></a>

```typescript
public readonly transformation: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#transformation GoogleDataLineageOpenLineageJob#transformation}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type">type</a></code> | <code>string</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype">subtype</a></code> | <code>string</code> | Transformation subtype. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#subtype GoogleDataLineageOpenLineageJob#subtype}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageField <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageField" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobOutputColumnLineageField: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.input">input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]</code> | input block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.name">name</a></code> | <code>string</code> | Output field name. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.input"></a>

```typescript
public readonly input: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Output field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobOutputColumnLineageFieldInput: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field">field</a></code> | <code>string</code> | Source field name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name">name</a></code> | <code>string</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation">transformation</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]</code> | transformation block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation"></a>

```typescript
public readonly transformation: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#transformation GoogleDataLineageOpenLineageJob#transformation}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type">type</a></code> | <code>string</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype">subtype</a></code> | <code>string</code> | Transformation subtype. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#subtype GoogleDataLineageOpenLineageJob#subtype}

---

### GoogleDataLineageOpenLineageJobOutputSymlink <a name="GoogleDataLineageOpenLineageJobOutputSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobOutputSymlink: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.name">name</a></code> | <code>string</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.type">type</a></code> | <code>string</code> | Type of the symlink target. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobTimeouts <a name="GoogleDataLineageOpenLineageJobTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

const googleDataLineageOpenLineageJobTimeouts: googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#create GoogleDataLineageOpenLineageJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#delete GoogleDataLineageOpenLineageJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#update GoogleDataLineageOpenLineageJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#create GoogleDataLineageOpenLineageJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#delete GoogleDataLineageOpenLineageJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#update GoogleDataLineageOpenLineageJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataLineageOpenLineageJobInputCatalogOutputReference <a name="GoogleDataLineageOpenLineageJobInputCatalogOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput"></a>

```typescript
public readonly frameworkInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLineageOpenLineageJobInputCatalog;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---


### GoogleDataLineageOpenLineageJobInputList <a name="GoogleDataLineageOpenLineageJobInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get"></a>

```typescript
public get(index: number): GoogleDataLineageOpenLineageJobInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]

---


### GoogleDataLineageOpenLineageJobInputOutputReference <a name="GoogleDataLineageOpenLineageJobInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog">putCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink">putSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetSymlink">resetSymlink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalog` <a name="putCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog"></a>

```typescript
public putCatalog(value: GoogleDataLineageOpenLineageJobInputCatalog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---

##### `putSymlink` <a name="putSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink"></a>

```typescript
public putSymlink(value: IResolvable | GoogleDataLineageOpenLineageJobInputSymlink[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetSymlink` <a name="resetSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetSymlink"></a>

```typescript
public resetSymlink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference">GoogleDataLineageOpenLineageJobInputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlink">symlink</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList">GoogleDataLineageOpenLineageJobInputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalogInput">catalogInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlinkInput">symlinkInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalog"></a>

```typescript
public readonly catalog: GoogleDataLineageOpenLineageJobInputCatalogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference">GoogleDataLineageOpenLineageJobInputCatalogOutputReference</a>

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlink"></a>

```typescript
public readonly symlink: GoogleDataLineageOpenLineageJobInputSymlinkList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList">GoogleDataLineageOpenLineageJobInputSymlinkList</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: GoogleDataLineageOpenLineageJobInputCatalog;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `symlinkInput`<sup>Optional</sup> <a name="symlinkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlinkInput"></a>

```typescript
public readonly symlinkInput: IResolvable | GoogleDataLineageOpenLineageJobInputSymlink[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>

---


### GoogleDataLineageOpenLineageJobInputSymlinkList <a name="GoogleDataLineageOpenLineageJobInputSymlinkList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get"></a>

```typescript
public get(index: number): GoogleDataLineageOpenLineageJobInputSymlinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobInputSymlink[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]

---


### GoogleDataLineageOpenLineageJobInputSymlinkOutputReference <a name="GoogleDataLineageOpenLineageJobInputSymlinkOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobInputSymlink;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>

---


### GoogleDataLineageOpenLineageJobOutputCatalogOutputReference <a name="GoogleDataLineageOpenLineageJobOutputCatalogOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput"></a>

```typescript
public readonly frameworkInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLineageOpenLineageJobOutputCatalog;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get"></a>

```typescript
public get(index: number): GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation">putTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation">resetTransformation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransformation` <a name="putTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation"></a>

```typescript
public putTransformation(value: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

---

##### `resetTransformation` <a name="resetTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation"></a>

```typescript
public resetTransformation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput">transformationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation"></a>

```typescript
public readonly transformation: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput"></a>

```typescript
public readonly transformationInput: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get"></a>

```typescript
public get(index: number): GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype">resetSubtype</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubtype` <a name="resetSubtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype"></a>

```typescript
public resetSubtype(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput">subtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype">subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput"></a>

```typescript
public readonly subtypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get"></a>

```typescript
public get(index: number): GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation">putTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation">resetTransformation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransformation` <a name="putTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation"></a>

```typescript
public putTransformation(value: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

---

##### `resetTransformation` <a name="resetTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation"></a>

```typescript
public resetTransformation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput">transformationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation"></a>

```typescript
public readonly transformation: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput"></a>

```typescript
public readonly transformationInput: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get"></a>

```typescript
public get(index: number): GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype">resetSubtype</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubtype` <a name="resetSubtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype"></a>

```typescript
public resetSubtype(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput">subtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype">subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput"></a>

```typescript
public readonly subtypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get"></a>

```typescript
public get(index: number): GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageField[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput">putInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput"></a>

```typescript
public putInput(value: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input">input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput">inputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input"></a>

```typescript
public readonly input: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList</a>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageField;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput">putDatasetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField">putField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput">resetDatasetInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetInput` <a name="putDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput"></a>

```typescript
public putDatasetInput(value: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

---

##### `putField` <a name="putField" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField"></a>

```typescript
public putField(value: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageField[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]

---

##### `resetDatasetInput` <a name="resetDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput"></a>

```typescript
public resetDatasetInput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput">datasetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field">field</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput">datasetInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput">fieldInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetInput`<sup>Required</sup> <a name="datasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput"></a>

```typescript
public readonly datasetInput: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field"></a>

```typescript
public readonly field: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList</a>

---

##### `datasetInputInput`<sup>Optional</sup> <a name="datasetInputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput"></a>

```typescript
public readonly datasetInputInput: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageField[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLineageOpenLineageJobOutputColumnLineage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---


### GoogleDataLineageOpenLineageJobOutputList <a name="GoogleDataLineageOpenLineageJobOutputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get"></a>

```typescript
public get(index: number): GoogleDataLineageOpenLineageJobOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]

---


### GoogleDataLineageOpenLineageJobOutputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog">putCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage">putColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink">putSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetColumnLineage">resetColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetSymlink">resetSymlink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalog` <a name="putCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog"></a>

```typescript
public putCatalog(value: GoogleDataLineageOpenLineageJobOutputCatalog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---

##### `putColumnLineage` <a name="putColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage"></a>

```typescript
public putColumnLineage(value: GoogleDataLineageOpenLineageJobOutputColumnLineage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `putSymlink` <a name="putSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink"></a>

```typescript
public putSymlink(value: IResolvable | GoogleDataLineageOpenLineageJobOutputSymlink[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetColumnLineage` <a name="resetColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetColumnLineage"></a>

```typescript
public resetColumnLineage(): void
```

##### `resetSymlink` <a name="resetSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetSymlink"></a>

```typescript
public resetSymlink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference">GoogleDataLineageOpenLineageJobOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineage">columnLineage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference">GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlink">symlink</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList">GoogleDataLineageOpenLineageJobOutputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalogInput">catalogInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput">columnLineageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlinkInput">symlinkInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalog"></a>

```typescript
public readonly catalog: GoogleDataLineageOpenLineageJobOutputCatalogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference">GoogleDataLineageOpenLineageJobOutputCatalogOutputReference</a>

---

##### `columnLineage`<sup>Required</sup> <a name="columnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineage"></a>

```typescript
public readonly columnLineage: GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference">GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference</a>

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlink"></a>

```typescript
public readonly symlink: GoogleDataLineageOpenLineageJobOutputSymlinkList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList">GoogleDataLineageOpenLineageJobOutputSymlinkList</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: GoogleDataLineageOpenLineageJobOutputCatalog;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---

##### `columnLineageInput`<sup>Optional</sup> <a name="columnLineageInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput"></a>

```typescript
public readonly columnLineageInput: GoogleDataLineageOpenLineageJobOutputColumnLineage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `symlinkInput`<sup>Optional</sup> <a name="symlinkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlinkInput"></a>

```typescript
public readonly symlinkInput: IResolvable | GoogleDataLineageOpenLineageJobOutputSymlink[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>

---


### GoogleDataLineageOpenLineageJobOutputSymlinkList <a name="GoogleDataLineageOpenLineageJobOutputSymlinkList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get"></a>

```typescript
public get(index: number): GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutputSymlink[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]

---


### GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference <a name="GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobOutputSymlink;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>

---


### GoogleDataLineageOpenLineageJobTimeoutsOutputReference <a name="GoogleDataLineageOpenLineageJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataLineageOpenLineageJob } from '@cdktn/provider-google-beta'

new googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLineageOpenLineageJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

---



