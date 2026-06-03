# `googleSaasRuntimeRolloutKind` Submodule <a name="`googleSaasRuntimeRolloutKind` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeRolloutKind <a name="GoogleSaasRuntimeRolloutKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind google_saas_runtime_rollout_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer"></a>

```typescript
import { googleSaasRuntimeRolloutKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind(scope: Construct, id: string, config: GoogleSaasRuntimeRolloutKindConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig">GoogleSaasRuntimeRolloutKindConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig">GoogleSaasRuntimeRolloutKindConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putErrorBudget">putErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetErrorBudget">resetErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy">resetRolloutOrchestrationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUnitFilter">resetUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUpdateUnitKindStrategy">resetUpdateUnitKindStrategy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putErrorBudget` <a name="putErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putErrorBudget"></a>

```typescript
public putErrorBudget(value: GoogleSaasRuntimeRolloutKindErrorBudget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putErrorBudget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSaasRuntimeRolloutKindTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetErrorBudget` <a name="resetErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetErrorBudget"></a>

```typescript
public resetErrorBudget(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRolloutOrchestrationStrategy` <a name="resetRolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy"></a>

```typescript
public resetRolloutOrchestrationStrategy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUnitFilter` <a name="resetUnitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUnitFilter"></a>

```typescript
public resetUnitFilter(): void
```

##### `resetUpdateUnitKindStrategy` <a name="resetUpdateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUpdateUnitKindStrategy"></a>

```typescript
public resetUpdateUnitKindStrategy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct"></a>

```typescript
import { googleSaasRuntimeRolloutKind } from '@cdktn/provider-google-beta'

googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement"></a>

```typescript
import { googleSaasRuntimeRolloutKind } from '@cdktn/provider-google-beta'

googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource"></a>

```typescript
import { googleSaasRuntimeRolloutKind } from '@cdktn/provider-google-beta'

googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport"></a>

```typescript
import { googleSaasRuntimeRolloutKind } from '@cdktn/provider-google-beta'

googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleSaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSaasRuntimeRolloutKind to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSaasRuntimeRolloutKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeRolloutKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudget">errorBudget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference">GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference">GoogleSaasRuntimeRolloutKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudgetInput">errorBudgetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindIdInput">rolloutKindIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput">rolloutOrchestrationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilterInput">unitFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKindInput">unitKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategyInput">updateUnitKindStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindId">rolloutKindId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy">rolloutOrchestrationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilter">unitFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKind">unitKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategy">updateUnitKindStrategy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `errorBudget`<sup>Required</sup> <a name="errorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudget"></a>

```typescript
public readonly errorBudget: GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference">GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSaasRuntimeRolloutKindTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference">GoogleSaasRuntimeRolloutKindTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `errorBudgetInput`<sup>Optional</sup> <a name="errorBudgetInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudgetInput"></a>

```typescript
public readonly errorBudgetInput: GoogleSaasRuntimeRolloutKindErrorBudget;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rolloutKindIdInput`<sup>Optional</sup> <a name="rolloutKindIdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindIdInput"></a>

```typescript
public readonly rolloutKindIdInput: string;
```

- *Type:* string

---

##### `rolloutOrchestrationStrategyInput`<sup>Optional</sup> <a name="rolloutOrchestrationStrategyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput"></a>

```typescript
public readonly rolloutOrchestrationStrategyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSaasRuntimeRolloutKindTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

---

##### `unitFilterInput`<sup>Optional</sup> <a name="unitFilterInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilterInput"></a>

```typescript
public readonly unitFilterInput: string;
```

- *Type:* string

---

##### `unitKindInput`<sup>Optional</sup> <a name="unitKindInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKindInput"></a>

```typescript
public readonly unitKindInput: string;
```

- *Type:* string

---

##### `updateUnitKindStrategyInput`<sup>Optional</sup> <a name="updateUnitKindStrategyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategyInput"></a>

```typescript
public readonly updateUnitKindStrategyInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `rolloutKindId`<sup>Required</sup> <a name="rolloutKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindId"></a>

```typescript
public readonly rolloutKindId: string;
```

- *Type:* string

---

##### `rolloutOrchestrationStrategy`<sup>Required</sup> <a name="rolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy"></a>

```typescript
public readonly rolloutOrchestrationStrategy: string;
```

- *Type:* string

---

##### `unitFilter`<sup>Required</sup> <a name="unitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilter"></a>

```typescript
public readonly unitFilter: string;
```

- *Type:* string

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKind"></a>

```typescript
public readonly unitKind: string;
```

- *Type:* string

---

##### `updateUnitKindStrategy`<sup>Required</sup> <a name="updateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategy"></a>

```typescript
public readonly updateUnitKindStrategy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeRolloutKindConfig <a name="GoogleSaasRuntimeRolloutKindConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.Initializer"></a>

```typescript
import { googleSaasRuntimeRolloutKind } from '@cdktn/provider-google-beta'

const googleSaasRuntimeRolloutKindConfig: googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutKindId">rolloutKindId</a></code> | <code>string</code> | The ID value for the new rollout kind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitKind">unitKind</a></code> | <code>string</code> | UnitKind that this rollout kind corresponds to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.errorBudget">errorBudget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | error_budget block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#id GoogleSaasRuntimeRolloutKind#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#project GoogleSaasRuntimeRolloutKind#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy">rolloutOrchestrationStrategy</a></code> | <code>string</code> | The strategy used for executing a Rollout. This is a required field. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitFilter">unitFilter</a></code> | <code>string</code> | CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy">updateUnitKindStrategy</a></code> | <code>string</code> | The config for updating the unit kind. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#location GoogleSaasRuntimeRolloutKind#location}

---

##### `rolloutKindId`<sup>Required</sup> <a name="rolloutKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutKindId"></a>

```typescript
public readonly rolloutKindId: string;
```

- *Type:* string

The ID value for the new rollout kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#rollout_kind_id GoogleSaasRuntimeRolloutKind#rollout_kind_id}

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitKind"></a>

```typescript
public readonly unitKind: string;
```

- *Type:* string

UnitKind that this rollout kind corresponds to.

Rollouts stemming from this
rollout kind will target the units of this unit kind. In other words, this
defines the population of target units to be upgraded by rollouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#unit_kind GoogleSaasRuntimeRolloutKind#unit_kind}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#annotations GoogleSaasRuntimeRolloutKind#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#deletion_policy GoogleSaasRuntimeRolloutKind#deletion_policy}

---

##### `errorBudget`<sup>Optional</sup> <a name="errorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.errorBudget"></a>

```typescript
public readonly errorBudget: GoogleSaasRuntimeRolloutKindErrorBudget;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

error_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#error_budget GoogleSaasRuntimeRolloutKind#error_budget}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#id GoogleSaasRuntimeRolloutKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#labels GoogleSaasRuntimeRolloutKind#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#project GoogleSaasRuntimeRolloutKind#project}.

---

##### `rolloutOrchestrationStrategy`<sup>Optional</sup> <a name="rolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy"></a>

```typescript
public readonly rolloutOrchestrationStrategy: string;
```

- *Type:* string

The strategy used for executing a Rollout. This is a required field.

There are two supported values strategies which are used to control a rollout.
- "Google.Cloud.Simple.AllAtOnce"
- "Google.Cloud.Simple.OneLocationAtATime"

A rollout with one of these simple strategies will rollout across
all locations defined in the associated UnitKind's Saas Locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#rollout_orchestration_strategy GoogleSaasRuntimeRolloutKind#rollout_orchestration_strategy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSaasRuntimeRolloutKindTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#timeouts GoogleSaasRuntimeRolloutKind#timeouts}

---

##### `unitFilter`<sup>Optional</sup> <a name="unitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitFilter"></a>

```typescript
public readonly unitFilter: string;
```

- *Type:* string

CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#unit_filter GoogleSaasRuntimeRolloutKind#unit_filter}

---

##### `updateUnitKindStrategy`<sup>Optional</sup> <a name="updateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy"></a>

```typescript
public readonly updateUnitKindStrategy: string;
```

- *Type:* string

The config for updating the unit kind.

By default, the unit kind will be
updated on the rollout start.
Possible values:
UPDATE_UNIT_KIND_STRATEGY_ON_START
UPDATE_UNIT_KIND_STRATEGY_NEVER Possible values: ["UPDATE_UNIT_KIND_STRATEGY_ON_START", "UPDATE_UNIT_KIND_STRATEGY_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#update_unit_kind_strategy GoogleSaasRuntimeRolloutKind#update_unit_kind_strategy}

---

### GoogleSaasRuntimeRolloutKindErrorBudget <a name="GoogleSaasRuntimeRolloutKindErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.Initializer"></a>

```typescript
import { googleSaasRuntimeRolloutKind } from '@cdktn/provider-google-beta'

const googleSaasRuntimeRolloutKindErrorBudget: googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedCount">allowedCount</a></code> | <code>number</code> | The maximum number of failed units allowed in a location without pausing the rollout. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedPercentage">allowedPercentage</a></code> | <code>number</code> | The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout. |

---

##### `allowedCount`<sup>Optional</sup> <a name="allowedCount" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedCount"></a>

```typescript
public readonly allowedCount: number;
```

- *Type:* number

The maximum number of failed units allowed in a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#allowed_count GoogleSaasRuntimeRolloutKind#allowed_count}

---

##### `allowedPercentage`<sup>Optional</sup> <a name="allowedPercentage" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedPercentage"></a>

```typescript
public readonly allowedPercentage: number;
```

- *Type:* number

The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#allowed_percentage GoogleSaasRuntimeRolloutKind#allowed_percentage}

---

### GoogleSaasRuntimeRolloutKindTimeouts <a name="GoogleSaasRuntimeRolloutKindTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.Initializer"></a>

```typescript
import { googleSaasRuntimeRolloutKind } from '@cdktn/provider-google-beta'

const googleSaasRuntimeRolloutKindTimeouts: googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#create GoogleSaasRuntimeRolloutKind#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#delete GoogleSaasRuntimeRolloutKind#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#update GoogleSaasRuntimeRolloutKind#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#create GoogleSaasRuntimeRolloutKind#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#delete GoogleSaasRuntimeRolloutKind#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_saas_runtime_rollout_kind#update GoogleSaasRuntimeRolloutKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference <a name="GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeRolloutKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount">resetAllowedCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage">resetAllowedPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedCount` <a name="resetAllowedCount" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount"></a>

```typescript
public resetAllowedCount(): void
```

##### `resetAllowedPercentage` <a name="resetAllowedPercentage" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage"></a>

```typescript
public resetAllowedPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput">allowedCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput">allowedPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount">allowedCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage">allowedPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedCountInput`<sup>Optional</sup> <a name="allowedCountInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput"></a>

```typescript
public readonly allowedCountInput: number;
```

- *Type:* number

---

##### `allowedPercentageInput`<sup>Optional</sup> <a name="allowedPercentageInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput"></a>

```typescript
public readonly allowedPercentageInput: number;
```

- *Type:* number

---

##### `allowedCount`<sup>Required</sup> <a name="allowedCount" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount"></a>

```typescript
public readonly allowedCount: number;
```

- *Type:* number

---

##### `allowedPercentage`<sup>Required</sup> <a name="allowedPercentage" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage"></a>

```typescript
public readonly allowedPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeRolloutKindErrorBudget;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

---


### GoogleSaasRuntimeRolloutKindTimeoutsOutputReference <a name="GoogleSaasRuntimeRolloutKindTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeRolloutKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeRolloutKindTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

---



