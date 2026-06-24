# `googleDiscoveryEngineSearchEngineIamBinding` Submodule <a name="`googleDiscoveryEngineSearchEngineIamBinding` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineSearchEngineIamBinding <a name="GoogleDiscoveryEngineSearchEngineIamBinding" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding google_discovery_engine_search_engine_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.Initializer"></a>

```typescript
import { googleDiscoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding(scope: Construct, id: string, config: GoogleDiscoveryEngineSearchEngineIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig">GoogleDiscoveryEngineSearchEngineIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig">GoogleDiscoveryEngineSearchEngineIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleDiscoveryEngineSearchEngineIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition">GoogleDiscoveryEngineSearchEngineIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineSearchEngineIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.isConstruct"></a>

```typescript
import { googleDiscoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google-beta'

googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.isTerraformElement"></a>

```typescript
import { googleDiscoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google-beta'

googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.isTerraformResource"></a>

```typescript
import { googleDiscoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google-beta'

googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.generateConfigForImport"></a>

```typescript
import { googleDiscoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google-beta'

googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineSearchEngineIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineSearchEngineIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineSearchEngineIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineSearchEngineIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference">GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition">GoogleDiscoveryEngineSearchEngineIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.engineIdInput">engineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.engineId">engineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference">GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleDiscoveryEngineSearchEngineIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition">GoogleDiscoveryEngineSearchEngineIamBindingCondition</a>

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.engineIdInput"></a>

```typescript
public readonly engineIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineSearchEngineIamBindingCondition <a name="GoogleDiscoveryEngineSearchEngineIamBindingCondition" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition.Initializer"></a>

```typescript
import { googleDiscoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineSearchEngineIamBindingCondition: googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#expression GoogleDiscoveryEngineSearchEngineIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#title GoogleDiscoveryEngineSearchEngineIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#description GoogleDiscoveryEngineSearchEngineIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#expression GoogleDiscoveryEngineSearchEngineIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#title GoogleDiscoveryEngineSearchEngineIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#description GoogleDiscoveryEngineSearchEngineIamBinding#description}.

---

### GoogleDiscoveryEngineSearchEngineIamBindingConfig <a name="GoogleDiscoveryEngineSearchEngineIamBindingConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineSearchEngineIamBindingConfig: googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.collectionId">collectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#collection_id GoogleDiscoveryEngineSearchEngineIamBinding#collection_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.engineId">engineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#engine_id GoogleDiscoveryEngineSearchEngineIamBinding#engine_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#members GoogleDiscoveryEngineSearchEngineIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#role GoogleDiscoveryEngineSearchEngineIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition">GoogleDiscoveryEngineSearchEngineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#id GoogleDiscoveryEngineSearchEngineIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#location GoogleDiscoveryEngineSearchEngineIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#project GoogleDiscoveryEngineSearchEngineIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#collection_id GoogleDiscoveryEngineSearchEngineIamBinding#collection_id}.

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#engine_id GoogleDiscoveryEngineSearchEngineIamBinding#engine_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#members GoogleDiscoveryEngineSearchEngineIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#role GoogleDiscoveryEngineSearchEngineIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleDiscoveryEngineSearchEngineIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition">GoogleDiscoveryEngineSearchEngineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#condition GoogleDiscoveryEngineSearchEngineIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#id GoogleDiscoveryEngineSearchEngineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#location GoogleDiscoveryEngineSearchEngineIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_search_engine_iam_binding#project GoogleDiscoveryEngineSearchEngineIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference <a name="GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineSearchEngineIamBinding } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition">GoogleDiscoveryEngineSearchEngineIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineSearchEngineIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngineIamBinding.GoogleDiscoveryEngineSearchEngineIamBindingCondition">GoogleDiscoveryEngineSearchEngineIamBindingCondition</a>

---



