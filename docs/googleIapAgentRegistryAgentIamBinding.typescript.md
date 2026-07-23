# `googleIapAgentRegistryAgentIamBinding` Submodule <a name="`googleIapAgentRegistryAgentIamBinding` Submodule" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapAgentRegistryAgentIamBinding <a name="GoogleIapAgentRegistryAgentIamBinding" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding google_iap_agent_registry_agent_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.Initializer"></a>

```typescript
import { googleIapAgentRegistryAgentIamBinding } from '@cdktn/provider-google-beta'

new googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding(scope: Construct, id: string, config: GoogleIapAgentRegistryAgentIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig">GoogleIapAgentRegistryAgentIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig">GoogleIapAgentRegistryAgentIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleIapAgentRegistryAgentIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition">GoogleIapAgentRegistryAgentIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIapAgentRegistryAgentIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.isConstruct"></a>

```typescript
import { googleIapAgentRegistryAgentIamBinding } from '@cdktn/provider-google-beta'

googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.isTerraformElement"></a>

```typescript
import { googleIapAgentRegistryAgentIamBinding } from '@cdktn/provider-google-beta'

googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.isTerraformResource"></a>

```typescript
import { googleIapAgentRegistryAgentIamBinding } from '@cdktn/provider-google-beta'

googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.generateConfigForImport"></a>

```typescript
import { googleIapAgentRegistryAgentIamBinding } from '@cdktn/provider-google-beta'

googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleIapAgentRegistryAgentIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIapAgentRegistryAgentIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIapAgentRegistryAgentIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapAgentRegistryAgentIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference">GoogleIapAgentRegistryAgentIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition">GoogleIapAgentRegistryAgentIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleIapAgentRegistryAgentIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference">GoogleIapAgentRegistryAgentIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleIapAgentRegistryAgentIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition">GoogleIapAgentRegistryAgentIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapAgentRegistryAgentIamBindingCondition <a name="GoogleIapAgentRegistryAgentIamBindingCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition.Initializer"></a>

```typescript
import { googleIapAgentRegistryAgentIamBinding } from '@cdktn/provider-google-beta'

const googleIapAgentRegistryAgentIamBindingCondition: googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#expression GoogleIapAgentRegistryAgentIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#title GoogleIapAgentRegistryAgentIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#description GoogleIapAgentRegistryAgentIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#expression GoogleIapAgentRegistryAgentIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#title GoogleIapAgentRegistryAgentIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#description GoogleIapAgentRegistryAgentIamBinding#description}.

---

### GoogleIapAgentRegistryAgentIamBindingConfig <a name="GoogleIapAgentRegistryAgentIamBindingConfig" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.Initializer"></a>

```typescript
import { googleIapAgentRegistryAgentIamBinding } from '@cdktn/provider-google-beta'

const googleIapAgentRegistryAgentIamBindingConfig: googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.agentId">agentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#agent_id GoogleIapAgentRegistryAgentIamBinding#agent_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#members GoogleIapAgentRegistryAgentIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#role GoogleIapAgentRegistryAgentIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition">GoogleIapAgentRegistryAgentIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#id GoogleIapAgentRegistryAgentIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#location GoogleIapAgentRegistryAgentIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#project GoogleIapAgentRegistryAgentIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#agent_id GoogleIapAgentRegistryAgentIamBinding#agent_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#members GoogleIapAgentRegistryAgentIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#role GoogleIapAgentRegistryAgentIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleIapAgentRegistryAgentIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition">GoogleIapAgentRegistryAgentIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#condition GoogleIapAgentRegistryAgentIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#id GoogleIapAgentRegistryAgentIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#location GoogleIapAgentRegistryAgentIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_iap_agent_registry_agent_iam_binding#project GoogleIapAgentRegistryAgentIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapAgentRegistryAgentIamBindingConditionOutputReference <a name="GoogleIapAgentRegistryAgentIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleIapAgentRegistryAgentIamBinding } from '@cdktn/provider-google-beta'

new googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition">GoogleIapAgentRegistryAgentIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapAgentRegistryAgentIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamBinding.GoogleIapAgentRegistryAgentIamBindingCondition">GoogleIapAgentRegistryAgentIamBindingCondition</a>

---



