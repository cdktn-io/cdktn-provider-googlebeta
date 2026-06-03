# `googleGkeBackupBackupPlan` Submodule <a name="`googleGkeBackupBackupPlan` Submodule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeBackupBackupPlan <a name="GoogleGkeBackupBackupPlan" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan google_gke_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan(scope: Construct, id: string, config: GoogleGkeBackupBackupPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig">GoogleGkeBackupBackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig">GoogleGkeBackupBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig">putBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupSchedule">putBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetBackupConfig">resetBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetBackupSchedule">resetBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDeactivated">resetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupConfig` <a name="putBackupConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig"></a>

```typescript
public putBackupConfig(value: GoogleGkeBackupBackupPlanBackupConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

---

##### `putBackupSchedule` <a name="putBackupSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupSchedule"></a>

```typescript
public putBackupSchedule(value: GoogleGkeBackupBackupPlanBackupSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

---

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putRetentionPolicy"></a>

```typescript
public putRetentionPolicy(value: GoogleGkeBackupBackupPlanRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGkeBackupBackupPlanTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>

---

##### `resetBackupConfig` <a name="resetBackupConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetBackupConfig"></a>

```typescript
public resetBackupConfig(): void
```

##### `resetBackupSchedule` <a name="resetBackupSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetBackupSchedule"></a>

```typescript
public resetBackupSchedule(): void
```

##### `resetDeactivated` <a name="resetDeactivated" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDeactivated"></a>

```typescript
public resetDeactivated(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetRetentionPolicy"></a>

```typescript
public resetRetentionPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGkeBackupBackupPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isConstruct"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformElement"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformResource"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleGkeBackupBackupPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeBackupBackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeBackupBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGkeBackupBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupConfig">backupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference">GoogleGkeBackupBackupPlanBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupSchedule">backupSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference">GoogleGkeBackupBackupPlanBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.protectedNamespaceCount">protectedNamespaceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.protectedPodCount">protectedPodCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference">GoogleGkeBackupBackupPlanRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.stateReason">stateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference">GoogleGkeBackupBackupPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupConfigInput">backupConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupScheduleInput">backupScheduleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deactivatedInput">deactivatedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deactivated">deactivated</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupConfig`<sup>Required</sup> <a name="backupConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupConfig"></a>

```typescript
public readonly backupConfig: GoogleGkeBackupBackupPlanBackupConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference">GoogleGkeBackupBackupPlanBackupConfigOutputReference</a>

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupSchedule"></a>

```typescript
public readonly backupSchedule: GoogleGkeBackupBackupPlanBackupScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference">GoogleGkeBackupBackupPlanBackupScheduleOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `protectedNamespaceCount`<sup>Required</sup> <a name="protectedNamespaceCount" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.protectedNamespaceCount"></a>

```typescript
public readonly protectedNamespaceCount: number;
```

- *Type:* number

---

##### `protectedPodCount`<sup>Required</sup> <a name="protectedPodCount" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.protectedPodCount"></a>

```typescript
public readonly protectedPodCount: number;
```

- *Type:* number

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: GoogleGkeBackupBackupPlanRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference">GoogleGkeBackupBackupPlanRetentionPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeBackupBackupPlanTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference">GoogleGkeBackupBackupPlanTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `backupConfigInput`<sup>Optional</sup> <a name="backupConfigInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupConfigInput"></a>

```typescript
public readonly backupConfigInput: GoogleGkeBackupBackupPlanBackupConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

---

##### `backupScheduleInput`<sup>Optional</sup> <a name="backupScheduleInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupScheduleInput"></a>

```typescript
public readonly backupScheduleInput: GoogleGkeBackupBackupPlanBackupSchedule;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `deactivatedInput`<sup>Optional</sup> <a name="deactivatedInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deactivatedInput"></a>

```typescript
public readonly deactivatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.retentionPolicyInput"></a>

```typescript
public readonly retentionPolicyInput: GoogleGkeBackupBackupPlanRetentionPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGkeBackupBackupPlanTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `deactivated`<sup>Required</sup> <a name="deactivated" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deactivated"></a>

```typescript
public readonly deactivated: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeBackupBackupPlanBackupConfig <a name="GoogleGkeBackupBackupPlanBackupConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupConfig: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.allNamespaces">allNamespaces</a></code> | <code>boolean \| cdktn.IResolvable</code> | If True, include all namespaced resources. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.includeSecrets">includeSecrets</a></code> | <code>boolean \| cdktn.IResolvable</code> | This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.includeVolumeData">includeVolumeData</a></code> | <code>boolean \| cdktn.IResolvable</code> | This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.permissiveMode">permissiveMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | This flag specifies whether Backups will not fail when Backup for GKE detects Kubernetes configuration that is non-standard or requires additional setup to restore. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedApplications">selectedApplications</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | selected_applications block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedNamespaceLabels">selectedNamespaceLabels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a></code> | selected_namespace_labels block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedNamespaces">selectedNamespaces</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | selected_namespaces block. |

---

##### `allNamespaces`<sup>Optional</sup> <a name="allNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.allNamespaces"></a>

```typescript
public readonly allNamespaces: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If True, include all namespaced resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#all_namespaces GoogleGkeBackupBackupPlan#all_namespaces}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: GoogleGkeBackupBackupPlanBackupConfigEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#encryption_key GoogleGkeBackupBackupPlan#encryption_key}

---

##### `includeSecrets`<sup>Optional</sup> <a name="includeSecrets" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.includeSecrets"></a>

```typescript
public readonly includeSecrets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#include_secrets GoogleGkeBackupBackupPlan#include_secrets}

---

##### `includeVolumeData`<sup>Optional</sup> <a name="includeVolumeData" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.includeVolumeData"></a>

```typescript
public readonly includeVolumeData: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#include_volume_data GoogleGkeBackupBackupPlan#include_volume_data}

---

##### `permissiveMode`<sup>Optional</sup> <a name="permissiveMode" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.permissiveMode"></a>

```typescript
public readonly permissiveMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This flag specifies whether Backups will not fail when Backup for GKE detects Kubernetes configuration that is non-standard or requires additional setup to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#permissive_mode GoogleGkeBackupBackupPlan#permissive_mode}

---

##### `selectedApplications`<sup>Optional</sup> <a name="selectedApplications" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedApplications"></a>

```typescript
public readonly selectedApplications: GoogleGkeBackupBackupPlanBackupConfigSelectedApplications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#selected_applications GoogleGkeBackupBackupPlan#selected_applications}

---

##### `selectedNamespaceLabels`<sup>Optional</sup> <a name="selectedNamespaceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedNamespaceLabels"></a>

```typescript
public readonly selectedNamespaceLabels: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a>

selected_namespace_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#selected_namespace_labels GoogleGkeBackupBackupPlan#selected_namespace_labels}

---

##### `selectedNamespaces`<sup>Optional</sup> <a name="selectedNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedNamespaces"></a>

```typescript
public readonly selectedNamespaces: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#selected_namespaces GoogleGkeBackupBackupPlan#selected_namespaces}

---

### GoogleGkeBackupBackupPlanBackupConfigEncryptionKey <a name="GoogleGkeBackupBackupPlanBackupConfigEncryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupConfigEncryptionKey: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey.property.gcpKmsEncryptionKey">gcpKmsEncryptionKey</a></code> | <code>string</code> | Google Cloud KMS encryption key. Format: projects/* /locations/* /keyRings/* /cryptoKeys/*. |

---

##### `gcpKmsEncryptionKey`<sup>Required</sup> <a name="gcpKmsEncryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey.property.gcpKmsEncryptionKey"></a>

```typescript
public readonly gcpKmsEncryptionKey: string;
```

- *Type:* string

Google Cloud KMS encryption key. Format: projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#gcp_kms_encryption_key GoogleGkeBackupBackupPlan#gcp_kms_encryption_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedApplications <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplications" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupConfigSelectedApplications: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications.property.namespacedNames">namespacedNames</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]</code> | namespaced_names block. |

---

##### `namespacedNames`<sup>Required</sup> <a name="namespacedNames" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications.property.namespacedNames"></a>

```typescript
public readonly namespacedNames: IResolvable | GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]

namespaced_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#namespaced_names GoogleGkeBackupBackupPlan#namespaced_names}

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.name">name</a></code> | <code>string</code> | The name of a Kubernetes Resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.namespace">namespace</a></code> | <code>string</code> | The namespace of a Kubernetes Resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#name GoogleGkeBackupBackupPlan#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#namespace GoogleGkeBackupBackupPlan#namespace}

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels.property.resourceLabels">resourceLabels</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]</code> | resource_labels block. |

---

##### `resourceLabels`<sup>Required</sup> <a name="resourceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels.property.resourceLabels"></a>

```typescript
public readonly resourceLabels: IResolvable | GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]

resource_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#resource_labels GoogleGkeBackupBackupPlan#resource_labels}

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.property.key">key</a></code> | <code>string</code> | The key of the kubernetes label. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.property.value">value</a></code> | <code>string</code> | The value of the Label. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the kubernetes label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#key GoogleGkeBackupBackupPlan#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the Label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#value GoogleGkeBackupBackupPlan#value}

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupConfigSelectedNamespaces: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces.property.namespaces">namespaces</a></code> | <code>string[]</code> | A list of Kubernetes Namespaces. |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#namespaces GoogleGkeBackupBackupPlan#namespaces}

---

### GoogleGkeBackupBackupPlanBackupSchedule <a name="GoogleGkeBackupBackupPlanBackupSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupSchedule: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.cronSchedule">cronSchedule</a></code> | <code>string</code> | A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.paused">paused</a></code> | <code>boolean \| cdktn.IResolvable</code> | This flag denotes whether automatic Backup creation is paused for this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.rpoConfig">rpoConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a></code> | rpo_config block. |

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.cronSchedule"></a>

```typescript
public readonly cronSchedule: string;
```

- *Type:* string

A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan.

This is mutually exclusive with the rpoConfig field since at most one
schedule can be defined for a BackupPlan.
If this is defined, then backupRetainDays must also be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#cron_schedule GoogleGkeBackupBackupPlan#cron_schedule}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This flag denotes whether automatic Backup creation is paused for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#paused GoogleGkeBackupBackupPlan#paused}

---

##### `rpoConfig`<sup>Optional</sup> <a name="rpoConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.rpoConfig"></a>

```typescript
public readonly rpoConfig: GoogleGkeBackupBackupPlanBackupScheduleRpoConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a>

rpo_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#rpo_config GoogleGkeBackupBackupPlan#rpo_config}

---

### GoogleGkeBackupBackupPlanBackupScheduleRpoConfig <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupScheduleRpoConfig: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig.property.targetRpoMinutes">targetRpoMinutes</a></code> | <code>number</code> | Defines the target RPO for the BackupPlan in minutes, which means the target maximum data loss in time that is acceptable for this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig.property.exclusionWindows">exclusionWindows</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]</code> | exclusion_windows block. |

---

##### `targetRpoMinutes`<sup>Required</sup> <a name="targetRpoMinutes" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig.property.targetRpoMinutes"></a>

```typescript
public readonly targetRpoMinutes: number;
```

- *Type:* number

Defines the target RPO for the BackupPlan in minutes, which means the target maximum data loss in time that is acceptable for this BackupPlan.

This must be
at least 60, i.e., 1 hour, and at most 86400, i.e., 60 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#target_rpo_minutes GoogleGkeBackupBackupPlan#target_rpo_minutes}

---

##### `exclusionWindows`<sup>Optional</sup> <a name="exclusionWindows" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig.property.exclusionWindows"></a>

```typescript
public readonly exclusionWindows: IResolvable | GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]

exclusion_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#exclusion_windows GoogleGkeBackupBackupPlan#exclusion_windows}

---

### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.duration">duration</a></code> | <code>string</code> | Specifies duration of the window in seconds with up to nine fractional digits, terminated by 's'. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a></code> | start_time block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daily">daily</a></code> | <code>boolean \| cdktn.IResolvable</code> | The exclusion window occurs every day if set to "True". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a></code> | days_of_week block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.singleOccurrenceDate">singleOccurrenceDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a></code> | single_occurrence_date block. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Specifies duration of the window in seconds with up to nine fractional digits, terminated by 's'.

Example: "3.5s". Restrictions for duration based on the
recurrence type to allow some time for backup to happen:
  - single_occurrence_date:  no restriction
  - daily window: duration < 24 hours
  - weekly window:
    - days of week includes all seven days of a week: duration < 24 hours
    - all other weekly window: duration < 168 hours (i.e., 24 * 7 hours)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#duration GoogleGkeBackupBackupPlan#duration}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.startTime"></a>

```typescript
public readonly startTime: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#start_time GoogleGkeBackupBackupPlan#start_time}

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daily"></a>

```typescript
public readonly daily: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The exclusion window occurs every day if set to "True".

Specifying this field to "False" is an error.
Only one of singleOccurrenceDate, daily and daysOfWeek may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#daily GoogleGkeBackupBackupPlan#daily}

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#days_of_week GoogleGkeBackupBackupPlan#days_of_week}

---

##### `singleOccurrenceDate`<sup>Optional</sup> <a name="singleOccurrenceDate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.singleOccurrenceDate"></a>

```typescript
public readonly singleOccurrenceDate: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

single_occurrence_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#single_occurrence_date GoogleGkeBackupBackupPlan#single_occurrence_date}

---

### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | A list of days of week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

A list of days of week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#days_of_week GoogleGkeBackupBackupPlan#days_of_week}

---

### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.day">day</a></code> | <code>number</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.month">month</a></code> | <code>number</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.year">year</a></code> | <code>number</code> | Year of the date. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#day GoogleGkeBackupBackupPlan#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#month GoogleGkeBackupBackupPlan#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#year GoogleGkeBackupBackupPlan#year}

---

### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#hours GoogleGkeBackupBackupPlan#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#minutes GoogleGkeBackupBackupPlan#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#nanos GoogleGkeBackupBackupPlan#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#seconds GoogleGkeBackupBackupPlan#seconds}

---

### GoogleGkeBackupBackupPlanConfig <a name="GoogleGkeBackupBackupPlanConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanConfig: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.cluster">cluster</a></code> | <code>string</code> | The source cluster from which Backups will be created via this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.location">location</a></code> | <code>string</code> | The region of the Backup Plan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.name">name</a></code> | <code>string</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.backupConfig">backupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.backupSchedule">backupSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.deactivated">deactivated</a></code> | <code>boolean \| cdktn.IResolvable</code> | This flag indicates whether this BackupPlan has been deactivated. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.description">description</a></code> | <code>string</code> | User specified descriptive string for this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#id GoogleGkeBackupBackupPlan#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#project GoogleGkeBackupBackupPlan#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The source cluster from which Backups will be created via this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#cluster GoogleGkeBackupBackupPlan#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The region of the Backup Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#location GoogleGkeBackupBackupPlan#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#name GoogleGkeBackupBackupPlan#name}

---

##### `backupConfig`<sup>Optional</sup> <a name="backupConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.backupConfig"></a>

```typescript
public readonly backupConfig: GoogleGkeBackupBackupPlanBackupConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#backup_config GoogleGkeBackupBackupPlan#backup_config}

---

##### `backupSchedule`<sup>Optional</sup> <a name="backupSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.backupSchedule"></a>

```typescript
public readonly backupSchedule: GoogleGkeBackupBackupPlanBackupSchedule;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#backup_schedule GoogleGkeBackupBackupPlan#backup_schedule}

---

##### `deactivated`<sup>Optional</sup> <a name="deactivated" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.deactivated"></a>

```typescript
public readonly deactivated: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This flag indicates whether this BackupPlan has been deactivated.

Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#deactivated GoogleGkeBackupBackupPlan#deactivated}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#deletion_policy GoogleGkeBackupBackupPlan#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User specified descriptive string for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#description GoogleGkeBackupBackupPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#id GoogleGkeBackupBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#labels GoogleGkeBackupBackupPlan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#project GoogleGkeBackupBackupPlan#project}.

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: GoogleGkeBackupBackupPlanRetentionPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#retention_policy GoogleGkeBackupBackupPlan#retention_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeBackupBackupPlanTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#timeouts GoogleGkeBackupBackupPlan#timeouts}

---

### GoogleGkeBackupBackupPlanRetentionPolicy <a name="GoogleGkeBackupBackupPlanRetentionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanRetentionPolicy: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.backupDeleteLockDays">backupDeleteLockDays</a></code> | <code>number</code> | Minimum age for a Backup created via this BackupPlan (in days). |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.backupRetainDays">backupRetainDays</a></code> | <code>number</code> | The default maximum age of a Backup created via this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.locked">locked</a></code> | <code>boolean \| cdktn.IResolvable</code> | This flag denotes whether the retention policy of this BackupPlan is locked. |

---

##### `backupDeleteLockDays`<sup>Optional</sup> <a name="backupDeleteLockDays" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.backupDeleteLockDays"></a>

```typescript
public readonly backupDeleteLockDays: number;
```

- *Type:* number

Minimum age for a Backup created via this BackupPlan (in days).

Must be an integer value between 0-90 (inclusive).
A Backup created under this BackupPlan will not be deletable
until it reaches Backup's (create time + backup_delete_lock_days).
Updating this field of a BackupPlan does not affect existing Backups.
Backups created after a successful update will inherit this new value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#backup_delete_lock_days GoogleGkeBackupBackupPlan#backup_delete_lock_days}

---

##### `backupRetainDays`<sup>Optional</sup> <a name="backupRetainDays" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.backupRetainDays"></a>

```typescript
public readonly backupRetainDays: number;
```

- *Type:* number

The default maximum age of a Backup created via this BackupPlan.

This field MUST be an integer value >= 0 and <= 365. If specified,
a Backup created under this BackupPlan will be automatically deleted
after its age reaches (createTime + backupRetainDays).
If not specified, Backups created under this BackupPlan will NOT be
subject to automatic deletion. Updating this field does NOT affect
existing Backups under it. Backups created AFTER a successful update
will automatically pick up the new value.
NOTE: backupRetainDays must be >= backupDeleteLockDays.
If cronSchedule is defined, then this must be <= 360 * the creation interval.
If rpo_config is defined, then this must be
<= 360 * targetRpoMinutes/(1440minutes/day)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#backup_retain_days GoogleGkeBackupBackupPlan#backup_retain_days}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.locked"></a>

```typescript
public readonly locked: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This flag denotes whether the retention policy of this BackupPlan is locked.

If set to True, no further update is allowed on this policy, including
the locked field itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#locked GoogleGkeBackupBackupPlan#locked}

---

### GoogleGkeBackupBackupPlanTimeouts <a name="GoogleGkeBackupBackupPlanTimeouts" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

const googleGkeBackupBackupPlanTimeouts: googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#create GoogleGkeBackupBackupPlan#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#delete GoogleGkeBackupBackupPlan#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#update GoogleGkeBackupBackupPlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#create GoogleGkeBackupBackupPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#delete GoogleGkeBackupBackupPlan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#update GoogleGkeBackupBackupPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKeyInput">gcpKmsEncryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKey">gcpKmsEncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcpKmsEncryptionKeyInput`<sup>Optional</sup> <a name="gcpKmsEncryptionKeyInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKeyInput"></a>

```typescript
public readonly gcpKmsEncryptionKeyInput: string;
```

- *Type:* string

---

##### `gcpKmsEncryptionKey`<sup>Required</sup> <a name="gcpKmsEncryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKey"></a>

```typescript
public readonly gcpKmsEncryptionKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeBackupBackupPlanBackupConfigEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a>

---


### GoogleGkeBackupBackupPlanBackupConfigOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications">putSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaceLabels">putSelectedNamespaceLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces">putSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetAllNamespaces">resetAllNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetIncludeSecrets">resetIncludeSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetIncludeVolumeData">resetIncludeVolumeData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetPermissiveMode">resetPermissiveMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedApplications">resetSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaceLabels">resetSelectedNamespaceLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaces">resetSelectedNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey"></a>

```typescript
public putEncryptionKey(value: GoogleGkeBackupBackupPlanBackupConfigEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a>

---

##### `putSelectedApplications` <a name="putSelectedApplications" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications"></a>

```typescript
public putSelectedApplications(value: GoogleGkeBackupBackupPlanBackupConfigSelectedApplications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a>

---

##### `putSelectedNamespaceLabels` <a name="putSelectedNamespaceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaceLabels"></a>

```typescript
public putSelectedNamespaceLabels(value: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaceLabels.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a>

---

##### `putSelectedNamespaces` <a name="putSelectedNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces"></a>

```typescript
public putSelectedNamespaces(value: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---

##### `resetAllNamespaces` <a name="resetAllNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetAllNamespaces"></a>

```typescript
public resetAllNamespaces(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetIncludeSecrets` <a name="resetIncludeSecrets" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetIncludeSecrets"></a>

```typescript
public resetIncludeSecrets(): void
```

##### `resetIncludeVolumeData` <a name="resetIncludeVolumeData" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetIncludeVolumeData"></a>

```typescript
public resetIncludeVolumeData(): void
```

##### `resetPermissiveMode` <a name="resetPermissiveMode" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetPermissiveMode"></a>

```typescript
public resetPermissiveMode(): void
```

##### `resetSelectedApplications` <a name="resetSelectedApplications" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedApplications"></a>

```typescript
public resetSelectedApplications(): void
```

##### `resetSelectedNamespaceLabels` <a name="resetSelectedNamespaceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaceLabels"></a>

```typescript
public resetSelectedNamespaceLabels(): void
```

##### `resetSelectedNamespaces` <a name="resetSelectedNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaces"></a>

```typescript
public resetSelectedNamespaces(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference">GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplications">selectedApplications</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaceLabels">selectedNamespaceLabels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaces">selectedNamespaces</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.allNamespacesInput">allNamespacesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeSecretsInput">includeSecretsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeDataInput">includeVolumeDataInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.permissiveModeInput">permissiveModeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplicationsInput">selectedApplicationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaceLabelsInput">selectedNamespaceLabelsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespacesInput">selectedNamespacesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.allNamespaces">allNamespaces</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeSecrets">includeSecrets</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeData">includeVolumeData</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.permissiveMode">permissiveMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference">GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference</a>

---

##### `selectedApplications`<sup>Required</sup> <a name="selectedApplications" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplications"></a>

```typescript
public readonly selectedApplications: GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference</a>

---

##### `selectedNamespaceLabels`<sup>Required</sup> <a name="selectedNamespaceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaceLabels"></a>

```typescript
public readonly selectedNamespaceLabels: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference</a>

---

##### `selectedNamespaces`<sup>Required</sup> <a name="selectedNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaces"></a>

```typescript
public readonly selectedNamespaces: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference</a>

---

##### `allNamespacesInput`<sup>Optional</sup> <a name="allNamespacesInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.allNamespacesInput"></a>

```typescript
public readonly allNamespacesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: GoogleGkeBackupBackupPlanBackupConfigEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a>

---

##### `includeSecretsInput`<sup>Optional</sup> <a name="includeSecretsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeSecretsInput"></a>

```typescript
public readonly includeSecretsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeVolumeDataInput`<sup>Optional</sup> <a name="includeVolumeDataInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeDataInput"></a>

```typescript
public readonly includeVolumeDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `permissiveModeInput`<sup>Optional</sup> <a name="permissiveModeInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.permissiveModeInput"></a>

```typescript
public readonly permissiveModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `selectedApplicationsInput`<sup>Optional</sup> <a name="selectedApplicationsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplicationsInput"></a>

```typescript
public readonly selectedApplicationsInput: GoogleGkeBackupBackupPlanBackupConfigSelectedApplications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a>

---

##### `selectedNamespaceLabelsInput`<sup>Optional</sup> <a name="selectedNamespaceLabelsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaceLabelsInput"></a>

```typescript
public readonly selectedNamespaceLabelsInput: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a>

---

##### `selectedNamespacesInput`<sup>Optional</sup> <a name="selectedNamespacesInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespacesInput"></a>

```typescript
public readonly selectedNamespacesInput: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---

##### `allNamespaces`<sup>Required</sup> <a name="allNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.allNamespaces"></a>

```typescript
public readonly allNamespaces: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeSecrets`<sup>Required</sup> <a name="includeSecrets" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeSecrets"></a>

```typescript
public readonly includeSecrets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeVolumeData`<sup>Required</sup> <a name="includeVolumeData" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeData"></a>

```typescript
public readonly includeVolumeData: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `permissiveMode`<sup>Required</sup> <a name="permissiveMode" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.permissiveMode"></a>

```typescript
public readonly permissiveMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeBackupBackupPlanBackupConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get"></a>

```typescript
public get(index: number): GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames">putNamespacedNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamespacedNames` <a name="putNamespacedNames" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames"></a>

```typescript
public putNamespacedNames(value: IResolvable | GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNames">namespacedNames</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNamesInput">namespacedNamesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespacedNames`<sup>Required</sup> <a name="namespacedNames" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNames"></a>

```typescript
public readonly namespacedNames: GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList</a>

---

##### `namespacedNamesInput`<sup>Optional</sup> <a name="namespacedNamesInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNamesInput"></a>

```typescript
public readonly namespacedNamesInput: IResolvable | GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeBackupBackupPlanBackupConfigSelectedApplications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.putResourceLabels">putResourceLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceLabels` <a name="putResourceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.putResourceLabels"></a>

```typescript
public putResourceLabels(value: IResolvable | GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.putResourceLabels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.resourceLabels">resourceLabels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.resourceLabelsInput">resourceLabelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceLabels`<sup>Required</sup> <a name="resourceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.resourceLabels"></a>

```typescript
public readonly resourceLabels: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList</a>

---

##### `resourceLabelsInput`<sup>Optional</sup> <a name="resourceLabelsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.resourceLabelsInput"></a>

```typescript
public readonly resourceLabelsInput: IResolvable | GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.get"></a>

```typescript
public get(index: number): GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespaces">namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespacesInput"></a>

```typescript
public readonly namespacesInput: string[];
```

- *Type:* string[]

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.putRpoConfig">putRpoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetCronSchedule">resetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetRpoConfig">resetRpoConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRpoConfig` <a name="putRpoConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.putRpoConfig"></a>

```typescript
public putRpoConfig(value: GoogleGkeBackupBackupPlanBackupScheduleRpoConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.putRpoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a>

---

##### `resetCronSchedule` <a name="resetCronSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetCronSchedule"></a>

```typescript
public resetCronSchedule(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetPaused"></a>

```typescript
public resetPaused(): void
```

##### `resetRpoConfig` <a name="resetRpoConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetRpoConfig"></a>

```typescript
public resetRpoConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfig">rpoConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.cronScheduleInput">cronScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfigInput">rpoConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.cronSchedule">cronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.paused">paused</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rpoConfig`<sup>Required</sup> <a name="rpoConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfig"></a>

```typescript
public readonly rpoConfig: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference</a>

---

##### `cronScheduleInput`<sup>Optional</sup> <a name="cronScheduleInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.cronScheduleInput"></a>

```typescript
public readonly cronScheduleInput: string;
```

- *Type:* string

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rpoConfigInput`<sup>Optional</sup> <a name="rpoConfigInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfigInput"></a>

```typescript
public readonly rpoConfigInput: GoogleGkeBackupBackupPlanBackupScheduleRpoConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a>

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.cronSchedule"></a>

```typescript
public readonly cronSchedule: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeBackupBackupPlanBackupSchedule;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.get"></a>

```typescript
public get(index: number): GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]

---


### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putSingleOccurrenceDate">putSingleOccurrenceDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetSingleOccurrenceDate">resetSingleOccurrenceDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putDaysOfWeek"></a>

```typescript
public putDaysOfWeek(value: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

---

##### `putSingleOccurrenceDate` <a name="putSingleOccurrenceDate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putSingleOccurrenceDate"></a>

```typescript
public putSingleOccurrenceDate(value: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putSingleOccurrenceDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

---

##### `resetDaily` <a name="resetDaily" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaily"></a>

```typescript
public resetDaily(): void
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetSingleOccurrenceDate` <a name="resetSingleOccurrenceDate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetSingleOccurrenceDate"></a>

```typescript
public resetSingleOccurrenceDate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDate">singleOccurrenceDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.dailyInput">dailyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDateInput">singleOccurrenceDateInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daily">daily</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference</a>

---

##### `singleOccurrenceDate`<sup>Required</sup> <a name="singleOccurrenceDate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDate"></a>

```typescript
public readonly singleOccurrenceDate: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference</a>

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.dailyInput"></a>

```typescript
public readonly dailyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `singleOccurrenceDateInput`<sup>Optional</sup> <a name="singleOccurrenceDateInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDateInput"></a>

```typescript
public readonly singleOccurrenceDateInput: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daily"></a>

```typescript
public readonly daily: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetYear"></a>

```typescript
public resetYear(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.putExclusionWindows">putExclusionWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resetExclusionWindows">resetExclusionWindows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusionWindows` <a name="putExclusionWindows" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.putExclusionWindows"></a>

```typescript
public putExclusionWindows(value: IResolvable | GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.putExclusionWindows.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]

---

##### `resetExclusionWindows` <a name="resetExclusionWindows" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resetExclusionWindows"></a>

```typescript
public resetExclusionWindows(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindows">exclusionWindows</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindowsInput">exclusionWindowsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutesInput">targetRpoMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutes">targetRpoMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusionWindows`<sup>Required</sup> <a name="exclusionWindows" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindows"></a>

```typescript
public readonly exclusionWindows: GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList</a>

---

##### `exclusionWindowsInput`<sup>Optional</sup> <a name="exclusionWindowsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindowsInput"></a>

```typescript
public readonly exclusionWindowsInput: IResolvable | GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]

---

##### `targetRpoMinutesInput`<sup>Optional</sup> <a name="targetRpoMinutesInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutesInput"></a>

```typescript
public readonly targetRpoMinutesInput: number;
```

- *Type:* number

---

##### `targetRpoMinutes`<sup>Required</sup> <a name="targetRpoMinutes" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutes"></a>

```typescript
public readonly targetRpoMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeBackupBackupPlanBackupScheduleRpoConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a>

---


### GoogleGkeBackupBackupPlanRetentionPolicyOutputReference <a name="GoogleGkeBackupBackupPlanRetentionPolicyOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupDeleteLockDays">resetBackupDeleteLockDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupRetainDays">resetBackupRetainDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetLocked">resetLocked</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupDeleteLockDays` <a name="resetBackupDeleteLockDays" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupDeleteLockDays"></a>

```typescript
public resetBackupDeleteLockDays(): void
```

##### `resetBackupRetainDays` <a name="resetBackupRetainDays" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupRetainDays"></a>

```typescript
public resetBackupRetainDays(): void
```

##### `resetLocked` <a name="resetLocked" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetLocked"></a>

```typescript
public resetLocked(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDaysInput">backupDeleteLockDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDaysInput">backupRetainDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.lockedInput">lockedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDays">backupDeleteLockDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDays">backupRetainDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.locked">locked</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupDeleteLockDaysInput`<sup>Optional</sup> <a name="backupDeleteLockDaysInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDaysInput"></a>

```typescript
public readonly backupDeleteLockDaysInput: number;
```

- *Type:* number

---

##### `backupRetainDaysInput`<sup>Optional</sup> <a name="backupRetainDaysInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDaysInput"></a>

```typescript
public readonly backupRetainDaysInput: number;
```

- *Type:* number

---

##### `lockedInput`<sup>Optional</sup> <a name="lockedInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.lockedInput"></a>

```typescript
public readonly lockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `backupDeleteLockDays`<sup>Required</sup> <a name="backupDeleteLockDays" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDays"></a>

```typescript
public readonly backupDeleteLockDays: number;
```

- *Type:* number

---

##### `backupRetainDays`<sup>Required</sup> <a name="backupRetainDays" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDays"></a>

```typescript
public readonly backupRetainDays: number;
```

- *Type:* number

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.locked"></a>

```typescript
public readonly locked: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeBackupBackupPlanRetentionPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

---


### GoogleGkeBackupBackupPlanTimeoutsOutputReference <a name="GoogleGkeBackupBackupPlanTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGkeBackupBackupPlan } from '@cdktn/provider-google-beta'

new googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeBackupBackupPlanTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>

---



