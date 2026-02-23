# `googleComputeNetworkFirewallPolicy` Submodule <a name="`googleComputeNetworkFirewallPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkFirewallPolicy <a name="GoogleComputeNetworkFirewallPolicy" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy google_compute_network_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicy } from '@cdktn/provider-google-beta'

new googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy(scope: Construct, id: string, config: GoogleComputeNetworkFirewallPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig">GoogleComputeNetworkFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig">GoogleComputeNetworkFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.resetPolicyType">resetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeNetworkFirewallPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts">GoogleComputeNetworkFirewallPolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.resetPolicyType"></a>

```typescript
public resetPolicyType(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeNetworkFirewallPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.isConstruct"></a>

```typescript
import { googleComputeNetworkFirewallPolicy } from '@cdktn/provider-google-beta'

googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.isTerraformElement"></a>

```typescript
import { googleComputeNetworkFirewallPolicy } from '@cdktn/provider-google-beta'

googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.isTerraformResource"></a>

```typescript
import { googleComputeNetworkFirewallPolicy } from '@cdktn/provider-google-beta'

googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.generateConfigForImport"></a>

```typescript
import { googleComputeNetworkFirewallPolicy } from '@cdktn/provider-google-beta'

googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeNetworkFirewallPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeNetworkFirewallPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeNetworkFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.ruleTupleCount">ruleTupleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.selfLinkWithId">selfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts">GoogleComputeNetworkFirewallPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

---

##### `ruleTupleCount`<sup>Required</sup> <a name="ruleTupleCount" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.ruleTupleCount"></a>

```typescript
public readonly ruleTupleCount: number;
```

- *Type:* number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.selfLinkWithId"></a>

```typescript
public readonly selfLinkWithId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeNetworkFirewallPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts">GoogleComputeNetworkFirewallPolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkFirewallPolicyConfig <a name="GoogleComputeNetworkFirewallPolicyConfig" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicy } from '@cdktn/provider-google-beta'

const googleComputeNetworkFirewallPolicyConfig: googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.name">name</a></code> | <code>string</code> | User-provided name of the Network firewall policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#id GoogleComputeNetworkFirewallPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.policyType">policyType</a></code> | <code>string</code> | Policy type is used to determine which resources (networks) the policy can be associated with. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#project GoogleComputeNetworkFirewallPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts">GoogleComputeNetworkFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

User-provided name of the Network firewall policy.

The name should be unique in the project in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#name GoogleComputeNetworkFirewallPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#description GoogleComputeNetworkFirewallPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#id GoogleComputeNetworkFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Policy type is used to determine which resources (networks) the policy can be associated with.

A policy can be associated with a network only if the network has the matching policyType in its network profile.
Different policy types may support some of the Firewall Rules features. Possible values: ["VPC_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#policy_type GoogleComputeNetworkFirewallPolicy#policy_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#project GoogleComputeNetworkFirewallPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeNetworkFirewallPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts">GoogleComputeNetworkFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#timeouts GoogleComputeNetworkFirewallPolicy#timeouts}

---

### GoogleComputeNetworkFirewallPolicyTimeouts <a name="GoogleComputeNetworkFirewallPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicy } from '@cdktn/provider-google-beta'

const googleComputeNetworkFirewallPolicyTimeouts: googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#create GoogleComputeNetworkFirewallPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#delete GoogleComputeNetworkFirewallPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#update GoogleComputeNetworkFirewallPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#create GoogleComputeNetworkFirewallPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#delete GoogleComputeNetworkFirewallPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_compute_network_firewall_policy#update GoogleComputeNetworkFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference <a name="GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicy } from '@cdktn/provider-google-beta'

new googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts">GoogleComputeNetworkFirewallPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeNetworkFirewallPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicy.GoogleComputeNetworkFirewallPolicyTimeouts">GoogleComputeNetworkFirewallPolicyTimeouts</a>

---



