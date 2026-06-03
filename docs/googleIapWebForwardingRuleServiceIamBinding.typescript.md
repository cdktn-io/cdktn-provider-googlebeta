# `googleIapWebForwardingRuleServiceIamBinding` Submodule <a name="`googleIapWebForwardingRuleServiceIamBinding` Submodule" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapWebForwardingRuleServiceIamBinding <a name="GoogleIapWebForwardingRuleServiceIamBinding" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding google_iap_web_forwarding_rule_service_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamBinding } from '@cdktn/provider-google-beta'

new googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding(scope: Construct, id: string, config: GoogleIapWebForwardingRuleServiceIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig">GoogleIapWebForwardingRuleServiceIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig">GoogleIapWebForwardingRuleServiceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleIapWebForwardingRuleServiceIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIapWebForwardingRuleServiceIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isConstruct"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamBinding } from '@cdktn/provider-google-beta'

googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformElement"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamBinding } from '@cdktn/provider-google-beta'

googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformResource"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamBinding } from '@cdktn/provider-google-beta'

googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamBinding } from '@cdktn/provider-google-beta'

googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleIapWebForwardingRuleServiceIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIapWebForwardingRuleServiceIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIapWebForwardingRuleServiceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapWebForwardingRuleServiceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference">GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceNameInput">forwardingRuleServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceName">forwardingRuleServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference">GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleIapWebForwardingRuleServiceIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a>

---

##### `forwardingRuleServiceNameInput`<sup>Optional</sup> <a name="forwardingRuleServiceNameInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceNameInput"></a>

```typescript
public readonly forwardingRuleServiceNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `forwardingRuleServiceName`<sup>Required</sup> <a name="forwardingRuleServiceName" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceName"></a>

```typescript
public readonly forwardingRuleServiceName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapWebForwardingRuleServiceIamBindingCondition <a name="GoogleIapWebForwardingRuleServiceIamBindingCondition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.Initializer"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamBinding } from '@cdktn/provider-google-beta'

const googleIapWebForwardingRuleServiceIamBindingCondition: googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#expression GoogleIapWebForwardingRuleServiceIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#title GoogleIapWebForwardingRuleServiceIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#description GoogleIapWebForwardingRuleServiceIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#expression GoogleIapWebForwardingRuleServiceIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#title GoogleIapWebForwardingRuleServiceIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#description GoogleIapWebForwardingRuleServiceIamBinding#description}.

---

### GoogleIapWebForwardingRuleServiceIamBindingConfig <a name="GoogleIapWebForwardingRuleServiceIamBindingConfig" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.Initializer"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamBinding } from '@cdktn/provider-google-beta'

const googleIapWebForwardingRuleServiceIamBindingConfig: googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.forwardingRuleServiceName">forwardingRuleServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#forwarding_rule_service_name GoogleIapWebForwardingRuleServiceIamBinding#forwarding_rule_service_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#members GoogleIapWebForwardingRuleServiceIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#role GoogleIapWebForwardingRuleServiceIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#id GoogleIapWebForwardingRuleServiceIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#project GoogleIapWebForwardingRuleServiceIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `forwardingRuleServiceName`<sup>Required</sup> <a name="forwardingRuleServiceName" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.forwardingRuleServiceName"></a>

```typescript
public readonly forwardingRuleServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#forwarding_rule_service_name GoogleIapWebForwardingRuleServiceIamBinding#forwarding_rule_service_name}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#members GoogleIapWebForwardingRuleServiceIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#role GoogleIapWebForwardingRuleServiceIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleIapWebForwardingRuleServiceIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#condition GoogleIapWebForwardingRuleServiceIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#id GoogleIapWebForwardingRuleServiceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#project GoogleIapWebForwardingRuleServiceIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference <a name="GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleIapWebForwardingRuleServiceIamBinding } from '@cdktn/provider-google-beta'

new googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapWebForwardingRuleServiceIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a>

---



