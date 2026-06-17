# `googleDnsResponsePolicyRule` Submodule <a name="`googleDnsResponsePolicyRule` Submodule" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDnsResponsePolicyRule <a name="GoogleDnsResponsePolicyRule" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule google_dns_response_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

new googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule(scope: Construct, id: string, config: GoogleDnsResponsePolicyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig">GoogleDnsResponsePolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig">GoogleDnsResponsePolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.putLocalData">putLocalData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetBehavior">resetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetLocalData">resetLocalData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocalData` <a name="putLocalData" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.putLocalData"></a>

```typescript
public putLocalData(value: GoogleDnsResponsePolicyRuleLocalData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.putLocalData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDnsResponsePolicyRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts">GoogleDnsResponsePolicyRuleTimeouts</a>

---

##### `resetBehavior` <a name="resetBehavior" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetBehavior"></a>

```typescript
public resetBehavior(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocalData` <a name="resetLocalData" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetLocalData"></a>

```typescript
public resetLocalData(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDnsResponsePolicyRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isConstruct"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformElement"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformResource"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDnsResponsePolicyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDnsResponsePolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDnsResponsePolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDnsResponsePolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.localData">localData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference">GoogleDnsResponsePolicyRuleLocalDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference">GoogleDnsResponsePolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.localDataInput">localDataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.responsePolicyInput">responsePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts">GoogleDnsResponsePolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.responsePolicy">responsePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `localData`<sup>Required</sup> <a name="localData" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.localData"></a>

```typescript
public readonly localData: GoogleDnsResponsePolicyRuleLocalDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference">GoogleDnsResponsePolicyRuleLocalDataOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDnsResponsePolicyRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference">GoogleDnsResponsePolicyRuleTimeoutsOutputReference</a>

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localDataInput`<sup>Optional</sup> <a name="localDataInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.localDataInput"></a>

```typescript
public readonly localDataInput: GoogleDnsResponsePolicyRuleLocalData;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `responsePolicyInput`<sup>Optional</sup> <a name="responsePolicyInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.responsePolicyInput"></a>

```typescript
public readonly responsePolicyInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDnsResponsePolicyRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts">GoogleDnsResponsePolicyRuleTimeouts</a>

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `responsePolicy`<sup>Required</sup> <a name="responsePolicy" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.responsePolicy"></a>

```typescript
public readonly responsePolicy: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDnsResponsePolicyRuleConfig <a name="GoogleDnsResponsePolicyRuleConfig" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.Initializer"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

const googleDnsResponsePolicyRuleConfig: googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.dnsName">dnsName</a></code> | <code>string</code> | The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.responsePolicy">responsePolicy</a></code> | <code>string</code> | Identifies the response policy addressed by this request. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | An identifier for this rule. Must be unique with the ResponsePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.behavior">behavior</a></code> | <code>string</code> | Answer this query with a behavior rather than DNS data. Acceptable values are 'behaviorUnspecified', and 'bypassResponsePolicy'. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#id GoogleDnsResponsePolicyRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.localData">localData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a></code> | local_data block. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#project GoogleDnsResponsePolicyRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts">GoogleDnsResponsePolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#dns_name GoogleDnsResponsePolicyRule#dns_name}

---

##### `responsePolicy`<sup>Required</sup> <a name="responsePolicy" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.responsePolicy"></a>

```typescript
public readonly responsePolicy: string;
```

- *Type:* string

Identifies the response policy addressed by this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#response_policy GoogleDnsResponsePolicyRule#response_policy}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

An identifier for this rule. Must be unique with the ResponsePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#rule_name GoogleDnsResponsePolicyRule#rule_name}

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

Answer this query with a behavior rather than DNS data. Acceptable values are 'behaviorUnspecified', and 'bypassResponsePolicy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#behavior GoogleDnsResponsePolicyRule#behavior}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#deletion_policy GoogleDnsResponsePolicyRule#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#id GoogleDnsResponsePolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localData`<sup>Optional</sup> <a name="localData" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.localData"></a>

```typescript
public readonly localData: GoogleDnsResponsePolicyRuleLocalData;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a>

local_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#local_data GoogleDnsResponsePolicyRule#local_data}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#project GoogleDnsResponsePolicyRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDnsResponsePolicyRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts">GoogleDnsResponsePolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#timeouts GoogleDnsResponsePolicyRule#timeouts}

---

### GoogleDnsResponsePolicyRuleLocalData <a name="GoogleDnsResponsePolicyRuleLocalData" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData.Initializer"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

const googleDnsResponsePolicyRuleLocalData: googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData.property.localDatas">localDatas</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas">GoogleDnsResponsePolicyRuleLocalDataLocalDatas</a>[]</code> | local_datas block. |

---

##### `localDatas`<sup>Required</sup> <a name="localDatas" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData.property.localDatas"></a>

```typescript
public readonly localDatas: IResolvable | GoogleDnsResponsePolicyRuleLocalDataLocalDatas[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas">GoogleDnsResponsePolicyRuleLocalDataLocalDatas</a>[]

local_datas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#local_datas GoogleDnsResponsePolicyRule#local_datas}

---

### GoogleDnsResponsePolicyRuleLocalDataLocalDatas <a name="GoogleDnsResponsePolicyRuleLocalDataLocalDatas" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.Initializer"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

const googleDnsResponsePolicyRuleLocalDataLocalDatas: googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.name">name</a></code> | <code>string</code> | For example, www.example.com. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.type">type</a></code> | <code>string</code> | One of valid DNS resource types. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.rrdatas">rrdatas</a></code> | <code>string[]</code> | As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1). |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.ttl">ttl</a></code> | <code>number</code> | Number of seconds that this ResourceRecordSet can be cached by resolvers. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

For example, www.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#name GoogleDnsResponsePolicyRule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

One of valid DNS resource types.

Possible values: ["A", "AAAA", "CAA", "CNAME", "DNSKEY", "DS", "HTTPS", "IPSECVPNKEY", "MX", "NAPTR", "NS", "PTR", "SOA", "SPF", "SRV", "SSHFP", "SVCB", "TLSA", "TXT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#type GoogleDnsResponsePolicyRule#type}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.rrdatas"></a>

```typescript
public readonly rrdatas: string[];
```

- *Type:* string[]

As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#rrdatas GoogleDnsResponsePolicyRule#rrdatas}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Number of seconds that this ResourceRecordSet can be cached by resolvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#ttl GoogleDnsResponsePolicyRule#ttl}

---

### GoogleDnsResponsePolicyRuleTimeouts <a name="GoogleDnsResponsePolicyRuleTimeouts" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.Initializer"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

const googleDnsResponsePolicyRuleTimeouts: googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#create GoogleDnsResponsePolicyRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#delete GoogleDnsResponsePolicyRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#update GoogleDnsResponsePolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#create GoogleDnsResponsePolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#delete GoogleDnsResponsePolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dns_response_policy_rule#update GoogleDnsResponsePolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDnsResponsePolicyRuleLocalDataLocalDatasList <a name="GoogleDnsResponsePolicyRuleLocalDataLocalDatasList" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

new googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.get"></a>

```typescript
public get(index: number): GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas">GoogleDnsResponsePolicyRuleLocalDataLocalDatas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsResponsePolicyRuleLocalDataLocalDatas[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas">GoogleDnsResponsePolicyRuleLocalDataLocalDatas</a>[]

---


### GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference <a name="GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

new googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetRrdatas">resetRrdatas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRrdatas` <a name="resetRrdatas" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetRrdatas"></a>

```typescript
public resetRrdatas(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatasInput">rrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatas">rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas">GoogleDnsResponsePolicyRuleLocalDataLocalDatas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rrdatasInput`<sup>Optional</sup> <a name="rrdatasInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatasInput"></a>

```typescript
public readonly rrdatasInput: string[];
```

- *Type:* string[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatas"></a>

```typescript
public readonly rrdatas: string[];
```

- *Type:* string[]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsResponsePolicyRuleLocalDataLocalDatas;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas">GoogleDnsResponsePolicyRuleLocalDataLocalDatas</a>

---


### GoogleDnsResponsePolicyRuleLocalDataOutputReference <a name="GoogleDnsResponsePolicyRuleLocalDataOutputReference" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.Initializer"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

new googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas">putLocalDatas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocalDatas` <a name="putLocalDatas" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas"></a>

```typescript
public putLocalDatas(value: IResolvable | GoogleDnsResponsePolicyRuleLocalDataLocalDatas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas">GoogleDnsResponsePolicyRuleLocalDataLocalDatas</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.localDatas">localDatas</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList">GoogleDnsResponsePolicyRuleLocalDataLocalDatasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.localDatasInput">localDatasInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas">GoogleDnsResponsePolicyRuleLocalDataLocalDatas</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localDatas`<sup>Required</sup> <a name="localDatas" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.localDatas"></a>

```typescript
public readonly localDatas: GoogleDnsResponsePolicyRuleLocalDataLocalDatasList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList">GoogleDnsResponsePolicyRuleLocalDataLocalDatasList</a>

---

##### `localDatasInput`<sup>Optional</sup> <a name="localDatasInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.localDatasInput"></a>

```typescript
public readonly localDatasInput: IResolvable | GoogleDnsResponsePolicyRuleLocalDataLocalDatas[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas">GoogleDnsResponsePolicyRuleLocalDataLocalDatas</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDnsResponsePolicyRuleLocalData;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a>

---


### GoogleDnsResponsePolicyRuleTimeoutsOutputReference <a name="GoogleDnsResponsePolicyRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDnsResponsePolicyRule } from '@cdktn/provider-google-beta'

new googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts">GoogleDnsResponsePolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsResponsePolicyRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts">GoogleDnsResponsePolicyRuleTimeouts</a>

---



