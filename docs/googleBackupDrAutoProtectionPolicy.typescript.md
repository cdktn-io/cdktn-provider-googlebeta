# `googleBackupDrAutoProtectionPolicy` Submodule <a name="`googleBackupDrAutoProtectionPolicy` Submodule" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrAutoProtectionPolicy <a name="GoogleBackupDrAutoProtectionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy google_backup_dr_auto_protection_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

new googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy(scope: Construct, id: string, config: GoogleBackupDrAutoProtectionPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig">GoogleBackupDrAutoProtectionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig">GoogleBackupDrAutoProtectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putBackupPlanDetails">putBackupPlanDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupPlanDetails` <a name="putBackupPlanDetails" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putBackupPlanDetails"></a>

```typescript
public putBackupPlanDetails(value: IResolvable | GoogleBackupDrAutoProtectionPolicyBackupPlanDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putBackupPlanDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putCriteria"></a>

```typescript
public putCriteria(value: GoogleBackupDrAutoProtectionPolicyCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBackupDrAutoProtectionPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isConstruct"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformElement"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformResource"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleBackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBackupDrAutoProtectionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBackupDrAutoProtectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrAutoProtectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.backupPlanDetails">backupPlanDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList">GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.bindingSummary">bindingSummary</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList">GoogleBackupDrAutoProtectionPolicyBindingSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference">GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.policyEvaluationSummary">policyEvaluationSummary</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference">GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput">autoProtectionPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.backupPlanDetailsInput">backupPlanDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupPlanDetails`<sup>Required</sup> <a name="backupPlanDetails" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.backupPlanDetails"></a>

```typescript
public readonly backupPlanDetails: GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList">GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList</a>

---

##### `bindingSummary`<sup>Required</sup> <a name="bindingSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.bindingSummary"></a>

```typescript
public readonly bindingSummary: GoogleBackupDrAutoProtectionPolicyBindingSummaryList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList">GoogleBackupDrAutoProtectionPolicyBindingSummaryList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.criteria"></a>

```typescript
public readonly criteria: GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference">GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyEvaluationSummary`<sup>Required</sup> <a name="policyEvaluationSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.policyEvaluationSummary"></a>

```typescript
public readonly policyEvaluationSummary: GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference">GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `autoProtectionPolicyIdInput`<sup>Optional</sup> <a name="autoProtectionPolicyIdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput"></a>

```typescript
public readonly autoProtectionPolicyIdInput: string;
```

- *Type:* string

---

##### `backupPlanDetailsInput`<sup>Optional</sup> <a name="backupPlanDetailsInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.backupPlanDetailsInput"></a>

```typescript
public readonly backupPlanDetailsInput: IResolvable | GoogleBackupDrAutoProtectionPolicyBackupPlanDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: GoogleBackupDrAutoProtectionPolicyCriteria;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBackupDrAutoProtectionPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a>

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.autoProtectionPolicyId"></a>

```typescript
public readonly autoProtectionPolicyId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrAutoProtectionPolicyBackupPlanDetails <a name="GoogleBackupDrAutoProtectionPolicyBackupPlanDetails" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

const googleBackupDrAutoProtectionPolicyBackupPlanDetails: googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan">backupPlan</a></code> | <code>string</code> | The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType">resourceType</a></code> | <code>string</code> | The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'. |

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan"></a>

```typescript
public readonly backupPlan: string;
```

- *Type:* string

The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'.

The backup plan
must be in the same location as the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#backup_plan GoogleBackupDrAutoProtectionPolicy#backup_plan}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#resource_type GoogleBackupDrAutoProtectionPolicy#resource_type}

---

### GoogleBackupDrAutoProtectionPolicyBindingSummary <a name="GoogleBackupDrAutoProtectionPolicyBindingSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

const googleBackupDrAutoProtectionPolicyBindingSummary: googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary = { ... }
```


### GoogleBackupDrAutoProtectionPolicyConfig <a name="GoogleBackupDrAutoProtectionPolicyConfig" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

const googleBackupDrAutoProtectionPolicyConfig: googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>string</code> | The ID of the auto protection policy. This becomes the final component of the policy's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.backupPlanDetails">backupPlanDetails</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]</code> | backup_plan_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.location">location</a></code> | <code>string</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.description">description</a></code> | <code>string</code> | A description of the auto protection policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#id GoogleBackupDrAutoProtectionPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#project GoogleBackupDrAutoProtectionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId"></a>

```typescript
public readonly autoProtectionPolicyId: string;
```

- *Type:* string

The ID of the auto protection policy. This becomes the final component of the policy's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#auto_protection_policy_id GoogleBackupDrAutoProtectionPolicy#auto_protection_policy_id}

---

##### `backupPlanDetails`<sup>Required</sup> <a name="backupPlanDetails" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.backupPlanDetails"></a>

```typescript
public readonly backupPlanDetails: IResolvable | GoogleBackupDrAutoProtectionPolicyBackupPlanDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

backup_plan_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#backup_plan_details GoogleBackupDrAutoProtectionPolicy#backup_plan_details}

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.criteria"></a>

```typescript
public readonly criteria: GoogleBackupDrAutoProtectionPolicyCriteria;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#criteria GoogleBackupDrAutoProtectionPolicy#criteria}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#location GoogleBackupDrAutoProtectionPolicy#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#deletion_policy GoogleBackupDrAutoProtectionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#description GoogleBackupDrAutoProtectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#id GoogleBackupDrAutoProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#project GoogleBackupDrAutoProtectionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBackupDrAutoProtectionPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#timeouts GoogleBackupDrAutoProtectionPolicy#timeouts}

---

### GoogleBackupDrAutoProtectionPolicyCriteria <a name="GoogleBackupDrAutoProtectionPolicyCriteria" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

const googleBackupDrAutoProtectionPolicyCriteria: googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria.property.matchingConditions">matchingConditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]</code> | matching_conditions block. |

---

##### `matchingConditions`<sup>Required</sup> <a name="matchingConditions" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria.property.matchingConditions"></a>

```typescript
public readonly matchingConditions: IResolvable | GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

matching_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#matching_conditions GoogleBackupDrAutoProtectionPolicy#matching_conditions}

---

### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

const googleBackupDrAutoProtectionPolicyCriteriaMatchingConditions: googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition">labelCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | label_condition block. |

---

##### `labelCondition`<sup>Optional</sup> <a name="labelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition"></a>

```typescript
public readonly labelCondition: GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

label_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#label_condition GoogleBackupDrAutoProtectionPolicy#label_condition}

---

### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

const googleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition: googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key">key</a></code> | <code>string</code> | The key of the label to match. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values">values</a></code> | <code>string[]</code> | The values of the label to match. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the label to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#key GoogleBackupDrAutoProtectionPolicy#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The values of the label to match.

A resource matches the condition if its label
value is equal to any of the listed values. Currently, only one value is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#values GoogleBackupDrAutoProtectionPolicy#values}

---

### GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary <a name="GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

const googleBackupDrAutoProtectionPolicyPolicyEvaluationSummary: googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary = { ... }
```


### GoogleBackupDrAutoProtectionPolicyTimeouts <a name="GoogleBackupDrAutoProtectionPolicyTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

const googleBackupDrAutoProtectionPolicyTimeouts: googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#create GoogleBackupDrAutoProtectionPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#delete GoogleBackupDrAutoProtectionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#update GoogleBackupDrAutoProtectionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#create GoogleBackupDrAutoProtectionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#delete GoogleBackupDrAutoProtectionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_backup_dr_auto_protection_policy#update GoogleBackupDrAutoProtectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList <a name="GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

new googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.get"></a>

```typescript
public get(index: number): GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBackupDrAutoProtectionPolicyBackupPlanDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

---


### GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference <a name="GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

new googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput">backupPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan">backupPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupPlanInput`<sup>Optional</sup> <a name="backupPlanInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput"></a>

```typescript
public readonly backupPlanInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan"></a>

```typescript
public readonly backupPlan: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBackupDrAutoProtectionPolicyBackupPlanDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>

---


### GoogleBackupDrAutoProtectionPolicyBindingSummaryList <a name="GoogleBackupDrAutoProtectionPolicyBindingSummaryList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

new googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.get"></a>

```typescript
public get(index: number): GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference <a name="GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

new googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount">projectCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary">GoogleBackupDrAutoProtectionPolicyBindingSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectCount`<sup>Required</sup> <a name="projectCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount"></a>

```typescript
public readonly projectCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBackupDrAutoProtectionPolicyBindingSummary;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary">GoogleBackupDrAutoProtectionPolicyBindingSummary</a>

---


### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

new googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---


### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

new googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get"></a>

```typescript
public get(index: number): GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

---


### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

new googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition">putLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition">resetLabelCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelCondition` <a name="putLabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition"></a>

```typescript
public putLabelCondition(value: GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `resetLabelCondition` <a name="resetLabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition"></a>

```typescript
public resetLabelCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition">labelCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput">labelConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelCondition`<sup>Required</sup> <a name="labelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition"></a>

```typescript
public readonly labelCondition: GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a>

---

##### `labelConditionInput`<sup>Optional</sup> <a name="labelConditionInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput"></a>

```typescript
public readonly labelConditionInput: GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>

---


### GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference <a name="GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

new googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions">putMatchingConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchingConditions` <a name="putMatchingConditions" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions"></a>

```typescript
public putMatchingConditions(value: IResolvable | GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions">matchingConditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput">matchingConditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingConditions`<sup>Required</sup> <a name="matchingConditions" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions"></a>

```typescript
public readonly matchingConditions: GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a>

---

##### `matchingConditionsInput`<sup>Optional</sup> <a name="matchingConditionsInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput"></a>

```typescript
public readonly matchingConditionsInput: IResolvable | GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBackupDrAutoProtectionPolicyCriteria;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a>

---


### GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList <a name="GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

new googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get"></a>

```typescript
public get(index: number): GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference <a name="GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

new googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount">failedResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount">matchingResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount">protectedResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary">GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failedResourceCount`<sup>Required</sup> <a name="failedResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```typescript
public readonly failedResourceCount: string;
```

- *Type:* string

---

##### `matchingResourceCount`<sup>Required</sup> <a name="matchingResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```typescript
public readonly matchingResourceCount: string;
```

- *Type:* string

---

##### `protectedResourceCount`<sup>Required</sup> <a name="protectedResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```typescript
public readonly protectedResourceCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary">GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary</a>

---


### GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference <a name="GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBackupDrAutoProtectionPolicy } from '@cdktn/provider-google-beta'

new googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBackupDrAutoProtectionPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a>

---



