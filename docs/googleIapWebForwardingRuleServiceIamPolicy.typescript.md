# `googleIapWebForwardingRuleServiceIamPolicy` Submodule <a name="`googleIapWebForwardingRuleServiceIamPolicy` Submodule" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapWebForwardingRuleServiceIamPolicy <a name="GoogleIapWebForwardingRuleServiceIamPolicy" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_forwarding_rule_service_iam_policy google_iap_web_forwarding_rule_service_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.Initializer"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamPolicy } from '@cdktn/provider-google-beta'

new googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy(scope: Construct, id: string, config: GoogleIapWebForwardingRuleServiceIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig">GoogleIapWebForwardingRuleServiceIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig">GoogleIapWebForwardingRuleServiceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIapWebForwardingRuleServiceIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.isConstruct"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamPolicy } from '@cdktn/provider-google-beta'

googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.isTerraformElement"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamPolicy } from '@cdktn/provider-google-beta'

googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.isTerraformResource"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamPolicy } from '@cdktn/provider-google-beta'

googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.generateConfigForImport"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamPolicy } from '@cdktn/provider-google-beta'

googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleIapWebForwardingRuleServiceIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIapWebForwardingRuleServiceIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIapWebForwardingRuleServiceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_forwarding_rule_service_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapWebForwardingRuleServiceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.forwardingRuleServiceNameInput">forwardingRuleServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.forwardingRuleServiceName">forwardingRuleServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `forwardingRuleServiceNameInput`<sup>Optional</sup> <a name="forwardingRuleServiceNameInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.forwardingRuleServiceNameInput"></a>

```typescript
public readonly forwardingRuleServiceNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `forwardingRuleServiceName`<sup>Required</sup> <a name="forwardingRuleServiceName" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.forwardingRuleServiceName"></a>

```typescript
public readonly forwardingRuleServiceName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapWebForwardingRuleServiceIamPolicyConfig <a name="GoogleIapWebForwardingRuleServiceIamPolicyConfig" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.Initializer"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamPolicy } from '@cdktn/provider-google-beta'

const googleIapWebForwardingRuleServiceIamPolicyConfig: googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.forwardingRuleServiceName">forwardingRuleServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_forwarding_rule_service_iam_policy#forwarding_rule_service_name GoogleIapWebForwardingRuleServiceIamPolicy#forwarding_rule_service_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_forwarding_rule_service_iam_policy#policy_data GoogleIapWebForwardingRuleServiceIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_forwarding_rule_service_iam_policy#id GoogleIapWebForwardingRuleServiceIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_forwarding_rule_service_iam_policy#project GoogleIapWebForwardingRuleServiceIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `forwardingRuleServiceName`<sup>Required</sup> <a name="forwardingRuleServiceName" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.forwardingRuleServiceName"></a>

```typescript
public readonly forwardingRuleServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_forwarding_rule_service_iam_policy#forwarding_rule_service_name GoogleIapWebForwardingRuleServiceIamPolicy#forwarding_rule_service_name}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_forwarding_rule_service_iam_policy#policy_data GoogleIapWebForwardingRuleServiceIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_forwarding_rule_service_iam_policy#id GoogleIapWebForwardingRuleServiceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamPolicy.GoogleIapWebForwardingRuleServiceIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_forwarding_rule_service_iam_policy#project GoogleIapWebForwardingRuleServiceIamPolicy#project}.

---



