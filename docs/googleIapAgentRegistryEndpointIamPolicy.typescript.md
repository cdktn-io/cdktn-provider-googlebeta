# `googleIapAgentRegistryEndpointIamPolicy` Submodule <a name="`googleIapAgentRegistryEndpointIamPolicy` Submodule" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapAgentRegistryEndpointIamPolicy <a name="GoogleIapAgentRegistryEndpointIamPolicy" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_endpoint_iam_policy google_iap_agent_registry_endpoint_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.Initializer"></a>

```typescript
import { googleIapAgentRegistryEndpointIamPolicy } from '@cdktn/provider-google-beta'

new googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy(scope: Construct, id: string, config: GoogleIapAgentRegistryEndpointIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig">GoogleIapAgentRegistryEndpointIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig">GoogleIapAgentRegistryEndpointIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIapAgentRegistryEndpointIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.isConstruct"></a>

```typescript
import { googleIapAgentRegistryEndpointIamPolicy } from '@cdktn/provider-google-beta'

googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.isTerraformElement"></a>

```typescript
import { googleIapAgentRegistryEndpointIamPolicy } from '@cdktn/provider-google-beta'

googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.isTerraformResource"></a>

```typescript
import { googleIapAgentRegistryEndpointIamPolicy } from '@cdktn/provider-google-beta'

googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport"></a>

```typescript
import { googleIapAgentRegistryEndpointIamPolicy } from '@cdktn/provider-google-beta'

googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleIapAgentRegistryEndpointIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIapAgentRegistryEndpointIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIapAgentRegistryEndpointIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_endpoint_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapAgentRegistryEndpointIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.endpointIdInput">endpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.endpointIdInput"></a>

```typescript
public readonly endpointIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapAgentRegistryEndpointIamPolicyConfig <a name="GoogleIapAgentRegistryEndpointIamPolicyConfig" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.Initializer"></a>

```typescript
import { googleIapAgentRegistryEndpointIamPolicy } from '@cdktn/provider-google-beta'

const googleIapAgentRegistryEndpointIamPolicyConfig: googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.endpointId">endpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_endpoint_iam_policy#endpoint_id GoogleIapAgentRegistryEndpointIamPolicy#endpoint_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_endpoint_iam_policy#policy_data GoogleIapAgentRegistryEndpointIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_endpoint_iam_policy#id GoogleIapAgentRegistryEndpointIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_endpoint_iam_policy#location GoogleIapAgentRegistryEndpointIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_endpoint_iam_policy#project GoogleIapAgentRegistryEndpointIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_endpoint_iam_policy#endpoint_id GoogleIapAgentRegistryEndpointIamPolicy#endpoint_id}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_endpoint_iam_policy#policy_data GoogleIapAgentRegistryEndpointIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_endpoint_iam_policy#id GoogleIapAgentRegistryEndpointIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_endpoint_iam_policy#location GoogleIapAgentRegistryEndpointIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamPolicy.GoogleIapAgentRegistryEndpointIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_endpoint_iam_policy#project GoogleIapAgentRegistryEndpointIamPolicy#project}.

---



