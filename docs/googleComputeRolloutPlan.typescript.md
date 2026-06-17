# `googleComputeRolloutPlan` Submodule <a name="`googleComputeRolloutPlan` Submodule" id="@cdktn/provider-google-beta.googleComputeRolloutPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRolloutPlan <a name="GoogleComputeRolloutPlan" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan google_compute_rollout_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlan(scope: Construct, id: string, config: GoogleComputeRolloutPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig">GoogleComputeRolloutPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig">GoogleComputeRolloutPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putWaves">putWaves</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetLocationScope">resetLocationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRolloutPlanTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

---

##### `putWaves` <a name="putWaves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putWaves"></a>

```typescript
public putWaves(value: IResolvable | GoogleComputeRolloutPlanWaves[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putWaves.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationScope` <a name="resetLocationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetLocationScope"></a>

```typescript
public resetLocationScope(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeRolloutPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeRolloutPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRolloutPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRolloutPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRolloutPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference">GoogleComputeRolloutPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.waves">waves</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList">GoogleComputeRolloutPlanWavesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScopeInput">locationScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.wavesInput">wavesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScope">locationScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRolloutPlanTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference">GoogleComputeRolloutPlanTimeoutsOutputReference</a>

---

##### `waves`<sup>Required</sup> <a name="waves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.waves"></a>

```typescript
public readonly waves: GoogleComputeRolloutPlanWavesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList">GoogleComputeRolloutPlanWavesList</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationScopeInput`<sup>Optional</sup> <a name="locationScopeInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScopeInput"></a>

```typescript
public readonly locationScopeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRolloutPlanTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

---

##### `wavesInput`<sup>Optional</sup> <a name="wavesInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.wavesInput"></a>

```typescript
public readonly wavesInput: IResolvable | GoogleComputeRolloutPlanWaves[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationScope`<sup>Required</sup> <a name="locationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScope"></a>

```typescript
public readonly locationScope: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRolloutPlanConfig <a name="GoogleComputeRolloutPlanConfig" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

const googleComputeRolloutPlanConfig: googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.waves">waves</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]</code> | waves block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#id GoogleComputeRolloutPlan#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.locationScope">locationScope</a></code> | <code>string</code> | The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#project GoogleComputeRolloutPlan#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#name GoogleComputeRolloutPlan#name}

---

##### `waves`<sup>Required</sup> <a name="waves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.waves"></a>

```typescript
public readonly waves: IResolvable | GoogleComputeRolloutPlanWaves[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]

waves block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#waves GoogleComputeRolloutPlan#waves}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#deletion_policy GoogleComputeRolloutPlan#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#description GoogleComputeRolloutPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#id GoogleComputeRolloutPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationScope`<sup>Optional</sup> <a name="locationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.locationScope"></a>

```typescript
public readonly locationScope: string;
```

- *Type:* string

The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#location_scope GoogleComputeRolloutPlan#location_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#project GoogleComputeRolloutPlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRolloutPlanTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#timeouts GoogleComputeRolloutPlan#timeouts}

---

### GoogleComputeRolloutPlanTimeouts <a name="GoogleComputeRolloutPlanTimeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

const googleComputeRolloutPlanTimeouts: googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#create GoogleComputeRolloutPlan#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#delete GoogleComputeRolloutPlan#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#create GoogleComputeRolloutPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#delete GoogleComputeRolloutPlan#delete}.

---

### GoogleComputeRolloutPlanWaves <a name="GoogleComputeRolloutPlanWaves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

const googleComputeRolloutPlanWaves: googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.selectors">selectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]</code> | selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a></code> | validation block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.displayName">displayName</a></code> | <code>string</code> | The display name of this wave of the rollout plan. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.orchestrationOptions">orchestrationOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a></code> | orchestration_options block. |

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.selectors"></a>

```typescript
public readonly selectors: IResolvable | GoogleComputeRolloutPlanWavesSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#selectors GoogleComputeRolloutPlan#selectors}

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.validation"></a>

```typescript
public readonly validation: GoogleComputeRolloutPlanWavesValidation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#validation GoogleComputeRolloutPlan#validation}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of this wave of the rollout plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#display_name GoogleComputeRolloutPlan#display_name}

---

##### `orchestrationOptions`<sup>Optional</sup> <a name="orchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.orchestrationOptions"></a>

```typescript
public readonly orchestrationOptions: GoogleComputeRolloutPlanWavesOrchestrationOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

orchestration_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#orchestration_options GoogleComputeRolloutPlan#orchestration_options}

---

### GoogleComputeRolloutPlanWavesOrchestrationOptions <a name="GoogleComputeRolloutPlanWavesOrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

const googleComputeRolloutPlanWavesOrchestrationOptions: googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.delays">delays</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]</code> | delays block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations">maxConcurrentLocations</a></code> | <code>number</code> | Maximum number of locations to be orchestrated in parallel. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation">maxConcurrentResourcesPerLocation</a></code> | <code>number</code> | Maximum number of resources to be orchestrated per location in parallel. |

---

##### `delays`<sup>Optional</sup> <a name="delays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.delays"></a>

```typescript
public readonly delays: IResolvable | GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]

delays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#delays GoogleComputeRolloutPlan#delays}

---

##### `maxConcurrentLocations`<sup>Optional</sup> <a name="maxConcurrentLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations"></a>

```typescript
public readonly maxConcurrentLocations: number;
```

- *Type:* number

Maximum number of locations to be orchestrated in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#max_concurrent_locations GoogleComputeRolloutPlan#max_concurrent_locations}

---

##### `maxConcurrentResourcesPerLocation`<sup>Optional</sup> <a name="maxConcurrentResourcesPerLocation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation"></a>

```typescript
public readonly maxConcurrentResourcesPerLocation: number;
```

- *Type:* number

Maximum number of resources to be orchestrated per location in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#max_concurrent_resources_per_location GoogleComputeRolloutPlan#max_concurrent_resources_per_location}

---

### GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

const googleComputeRolloutPlanWavesOrchestrationOptionsDelays: googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter">delimiter</a></code> | <code>string</code> | Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration">duration</a></code> | <code>string</code> | The duration of the delay, if any, to be added between batches of projects. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type">type</a></code> | <code>string</code> | Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location.

Possible values: ["DELIMITER_UNSPECIFIED", "DELIMITER_LOCATION", "DELIMITER_BATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#delimiter GoogleComputeRolloutPlan#delimiter}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The duration of the delay, if any, to be added between batches of projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#duration GoogleComputeRolloutPlan#duration}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration.

Possible values: ["TYPE_UNSPECIFIED", "TYPE_OFFSET", "TYPE_MINIMUM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#type GoogleComputeRolloutPlan#type}

---

### GoogleComputeRolloutPlanWavesSelectors <a name="GoogleComputeRolloutPlanWavesSelectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

const googleComputeRolloutPlanWavesSelectors: googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.locationSelector">locationSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | location_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector">resourceHierarchySelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | resource_hierarchy_selector block. |

---

##### `locationSelector`<sup>Optional</sup> <a name="locationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.locationSelector"></a>

```typescript
public readonly locationSelector: GoogleComputeRolloutPlanWavesSelectorsLocationSelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

location_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#location_selector GoogleComputeRolloutPlan#location_selector}

---

##### `resourceHierarchySelector`<sup>Optional</sup> <a name="resourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector"></a>

```typescript
public readonly resourceHierarchySelector: GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

resource_hierarchy_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#resource_hierarchy_selector GoogleComputeRolloutPlan#resource_hierarchy_selector}

---

### GoogleComputeRolloutPlanWavesSelectorsLocationSelector <a name="GoogleComputeRolloutPlanWavesSelectorsLocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

const googleComputeRolloutPlanWavesSelectorsLocationSelector: googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations">includedLocations</a></code> | <code>string[]</code> | Example: "us-central1-a". |

---

##### `includedLocations`<sup>Optional</sup> <a name="includedLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations"></a>

```typescript
public readonly includedLocations: string[];
```

- *Type:* string[]

Example: "us-central1-a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#included_locations GoogleComputeRolloutPlan#included_locations}

---

### GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector <a name="GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

const googleComputeRolloutPlanWavesSelectorsResourceHierarchySelector: googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders">includedFolders</a></code> | <code>string[]</code> | Format: "folders/{folder_id}". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations">includedOrganizations</a></code> | <code>string[]</code> | Format: "organizations/{organization_id}". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects">includedProjects</a></code> | <code>string[]</code> | Format: "projects/{project_id}". |

---

##### `includedFolders`<sup>Optional</sup> <a name="includedFolders" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders"></a>

```typescript
public readonly includedFolders: string[];
```

- *Type:* string[]

Format: "folders/{folder_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#included_folders GoogleComputeRolloutPlan#included_folders}

---

##### `includedOrganizations`<sup>Optional</sup> <a name="includedOrganizations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations"></a>

```typescript
public readonly includedOrganizations: string[];
```

- *Type:* string[]

Format: "organizations/{organization_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#included_organizations GoogleComputeRolloutPlan#included_organizations}

---

##### `includedProjects`<sup>Optional</sup> <a name="includedProjects" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects"></a>

```typescript
public readonly includedProjects: string[];
```

- *Type:* string[]

Format: "projects/{project_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#included_projects GoogleComputeRolloutPlan#included_projects}

---

### GoogleComputeRolloutPlanWavesValidation <a name="GoogleComputeRolloutPlanWavesValidation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

const googleComputeRolloutPlanWavesValidation: googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.type">type</a></code> | <code>string</code> | The type of the validation. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata">timeBasedValidationMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | time_based_validation_metadata block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the validation.

Possible values:
"manual": The system waits for an end-user approval API before progressing to the next wave.
"time": The system waits for a user specified duration before progressing to the next wave.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#type GoogleComputeRolloutPlan#type}

---

##### `timeBasedValidationMetadata`<sup>Optional</sup> <a name="timeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata"></a>

```typescript
public readonly timeBasedValidationMetadata: GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

time_based_validation_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#time_based_validation_metadata GoogleComputeRolloutPlan#time_based_validation_metadata}

---

### GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata <a name="GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

const googleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata: googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration">waitDuration</a></code> | <code>string</code> | The duration that the system waits in between waves. |

---

##### `waitDuration`<sup>Optional</sup> <a name="waitDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration"></a>

```typescript
public readonly waitDuration: string;
```

- *Type:* string

The duration that the system waits in between waves.

This wait starts
after all changes in the wave are rolled out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#wait_duration GoogleComputeRolloutPlan#wait_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRolloutPlanTimeoutsOutputReference <a name="GoogleComputeRolloutPlanTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRolloutPlanTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

---


### GoogleComputeRolloutPlanWavesList <a name="GoogleComputeRolloutPlanWavesList" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.get"></a>

```typescript
public get(index: number): GoogleComputeRolloutPlanWavesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRolloutPlanWaves[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]

---


### GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get"></a>

```typescript
public get(index: number): GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]

---


### GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>

---


### GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays">putDelays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays">resetDelays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations">resetMaxConcurrentLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation">resetMaxConcurrentResourcesPerLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDelays` <a name="putDelays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays"></a>

```typescript
public putDelays(value: IResolvable | GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]

---

##### `resetDelays` <a name="resetDelays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays"></a>

```typescript
public resetDelays(): void
```

##### `resetMaxConcurrentLocations` <a name="resetMaxConcurrentLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations"></a>

```typescript
public resetMaxConcurrentLocations(): void
```

##### `resetMaxConcurrentResourcesPerLocation` <a name="resetMaxConcurrentResourcesPerLocation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation"></a>

```typescript
public resetMaxConcurrentResourcesPerLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays">delays</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput">delaysInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput">maxConcurrentLocationsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput">maxConcurrentResourcesPerLocationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations">maxConcurrentLocations</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation">maxConcurrentResourcesPerLocation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delays`<sup>Required</sup> <a name="delays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays"></a>

```typescript
public readonly delays: GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a>

---

##### `delaysInput`<sup>Optional</sup> <a name="delaysInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput"></a>

```typescript
public readonly delaysInput: IResolvable | GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]

---

##### `maxConcurrentLocationsInput`<sup>Optional</sup> <a name="maxConcurrentLocationsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput"></a>

```typescript
public readonly maxConcurrentLocationsInput: number;
```

- *Type:* number

---

##### `maxConcurrentResourcesPerLocationInput`<sup>Optional</sup> <a name="maxConcurrentResourcesPerLocationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput"></a>

```typescript
public readonly maxConcurrentResourcesPerLocationInput: number;
```

- *Type:* number

---

##### `maxConcurrentLocations`<sup>Required</sup> <a name="maxConcurrentLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations"></a>

```typescript
public readonly maxConcurrentLocations: number;
```

- *Type:* number

---

##### `maxConcurrentResourcesPerLocation`<sup>Required</sup> <a name="maxConcurrentResourcesPerLocation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation"></a>

```typescript
public readonly maxConcurrentResourcesPerLocation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRolloutPlanWavesOrchestrationOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

---


### GoogleComputeRolloutPlanWavesOutputReference <a name="GoogleComputeRolloutPlanWavesOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putOrchestrationOptions">putOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putValidation">putValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions">resetOrchestrationOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOrchestrationOptions` <a name="putOrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putOrchestrationOptions"></a>

```typescript
public putOrchestrationOptions(value: GoogleComputeRolloutPlanWavesOrchestrationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putOrchestrationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `putSelectors` <a name="putSelectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putSelectors"></a>

```typescript
public putSelectors(value: IResolvable | GoogleComputeRolloutPlanWavesSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]

---

##### `putValidation` <a name="putValidation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putValidation"></a>

```typescript
public putValidation(value: GoogleComputeRolloutPlanWavesValidation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetOrchestrationOptions` <a name="resetOrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions"></a>

```typescript
public resetOrchestrationOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptions">orchestrationOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference">GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList">GoogleComputeRolloutPlanWavesSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference">GoogleComputeRolloutPlanWavesValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput">orchestrationOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectorsInput">selectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validationInput">validationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `orchestrationOptions`<sup>Required</sup> <a name="orchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptions"></a>

```typescript
public readonly orchestrationOptions: GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference">GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectors"></a>

```typescript
public readonly selectors: GoogleComputeRolloutPlanWavesSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList">GoogleComputeRolloutPlanWavesSelectorsList</a>

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validation"></a>

```typescript
public readonly validation: GoogleComputeRolloutPlanWavesValidationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference">GoogleComputeRolloutPlanWavesValidationOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `orchestrationOptionsInput`<sup>Optional</sup> <a name="orchestrationOptionsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput"></a>

```typescript
public readonly orchestrationOptionsInput: GoogleComputeRolloutPlanWavesOrchestrationOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectorsInput"></a>

```typescript
public readonly selectorsInput: IResolvable | GoogleComputeRolloutPlanWavesSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validationInput"></a>

```typescript
public readonly validationInput: GoogleComputeRolloutPlanWavesValidation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRolloutPlanWaves;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>

---


### GoogleComputeRolloutPlanWavesSelectorsList <a name="GoogleComputeRolloutPlanWavesSelectorsList" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.get"></a>

```typescript
public get(index: number): GoogleComputeRolloutPlanWavesSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRolloutPlanWavesSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]

---


### GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference <a name="GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations">resetIncludedLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludedLocations` <a name="resetIncludedLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations"></a>

```typescript
public resetIncludedLocations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput">includedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations">includedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includedLocationsInput`<sup>Optional</sup> <a name="includedLocationsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput"></a>

```typescript
public readonly includedLocationsInput: string[];
```

- *Type:* string[]

---

##### `includedLocations`<sup>Required</sup> <a name="includedLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations"></a>

```typescript
public readonly includedLocations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRolloutPlanWavesSelectorsLocationSelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

---


### GoogleComputeRolloutPlanWavesSelectorsOutputReference <a name="GoogleComputeRolloutPlanWavesSelectorsOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector">putLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector">putResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector">resetLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector">resetResourceHierarchySelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocationSelector` <a name="putLocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector"></a>

```typescript
public putLocationSelector(value: GoogleComputeRolloutPlanWavesSelectorsLocationSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `putResourceHierarchySelector` <a name="putResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector"></a>

```typescript
public putResourceHierarchySelector(value: GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `resetLocationSelector` <a name="resetLocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector"></a>

```typescript
public resetLocationSelector(): void
```

##### `resetResourceHierarchySelector` <a name="resetResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector"></a>

```typescript
public resetResourceHierarchySelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector">locationSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector">resourceHierarchySelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput">locationSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput">resourceHierarchySelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationSelector`<sup>Required</sup> <a name="locationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector"></a>

```typescript
public readonly locationSelector: GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a>

---

##### `resourceHierarchySelector`<sup>Required</sup> <a name="resourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector"></a>

```typescript
public readonly resourceHierarchySelector: GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a>

---

##### `locationSelectorInput`<sup>Optional</sup> <a name="locationSelectorInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput"></a>

```typescript
public readonly locationSelectorInput: GoogleComputeRolloutPlanWavesSelectorsLocationSelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `resourceHierarchySelectorInput`<sup>Optional</sup> <a name="resourceHierarchySelectorInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput"></a>

```typescript
public readonly resourceHierarchySelectorInput: GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRolloutPlanWavesSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>

---


### GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference <a name="GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders">resetIncludedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations">resetIncludedOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects">resetIncludedProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludedFolders` <a name="resetIncludedFolders" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders"></a>

```typescript
public resetIncludedFolders(): void
```

##### `resetIncludedOrganizations` <a name="resetIncludedOrganizations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations"></a>

```typescript
public resetIncludedOrganizations(): void
```

##### `resetIncludedProjects` <a name="resetIncludedProjects" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects"></a>

```typescript
public resetIncludedProjects(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput">includedFoldersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput">includedOrganizationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput">includedProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders">includedFolders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations">includedOrganizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects">includedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includedFoldersInput`<sup>Optional</sup> <a name="includedFoldersInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput"></a>

```typescript
public readonly includedFoldersInput: string[];
```

- *Type:* string[]

---

##### `includedOrganizationsInput`<sup>Optional</sup> <a name="includedOrganizationsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput"></a>

```typescript
public readonly includedOrganizationsInput: string[];
```

- *Type:* string[]

---

##### `includedProjectsInput`<sup>Optional</sup> <a name="includedProjectsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput"></a>

```typescript
public readonly includedProjectsInput: string[];
```

- *Type:* string[]

---

##### `includedFolders`<sup>Required</sup> <a name="includedFolders" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders"></a>

```typescript
public readonly includedFolders: string[];
```

- *Type:* string[]

---

##### `includedOrganizations`<sup>Required</sup> <a name="includedOrganizations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations"></a>

```typescript
public readonly includedOrganizations: string[];
```

- *Type:* string[]

---

##### `includedProjects`<sup>Required</sup> <a name="includedProjects" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects"></a>

```typescript
public readonly includedProjects: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---


### GoogleComputeRolloutPlanWavesValidationOutputReference <a name="GoogleComputeRolloutPlanWavesValidationOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata">putTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata">resetTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimeBasedValidationMetadata` <a name="putTimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata"></a>

```typescript
public putTimeBasedValidationMetadata(value: GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `resetTimeBasedValidationMetadata` <a name="resetTimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata"></a>

```typescript
public resetTimeBasedValidationMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata">timeBasedValidationMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput">timeBasedValidationMetadataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeBasedValidationMetadata`<sup>Required</sup> <a name="timeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata"></a>

```typescript
public readonly timeBasedValidationMetadata: GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a>

---

##### `timeBasedValidationMetadataInput`<sup>Optional</sup> <a name="timeBasedValidationMetadataInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput"></a>

```typescript
public readonly timeBasedValidationMetadataInput: GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRolloutPlanWavesValidation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

---


### GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference <a name="GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer"></a>

```typescript
import { googleComputeRolloutPlan } from '@cdktn/provider-google-beta'

new googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration">resetWaitDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWaitDuration` <a name="resetWaitDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration"></a>

```typescript
public resetWaitDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput">waitDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration">waitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `waitDurationInput`<sup>Optional</sup> <a name="waitDurationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput"></a>

```typescript
public readonly waitDurationInput: string;
```

- *Type:* string

---

##### `waitDuration`<sup>Required</sup> <a name="waitDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration"></a>

```typescript
public readonly waitDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---



