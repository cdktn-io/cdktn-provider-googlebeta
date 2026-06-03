# `googleChronicleNativeDashboard` Submodule <a name="`googleChronicleNativeDashboard` Submodule" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleNativeDashboard <a name="GoogleChronicleNativeDashboard" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard google_chronicle_native_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

new googleChronicleNativeDashboard.GoogleChronicleNativeDashboard(scope: Construct, id: string, config: GoogleChronicleNativeDashboardConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig">GoogleChronicleNativeDashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig">GoogleChronicleNativeDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putCharts">putCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetCharts">resetCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetIsPinned">resetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCharts` <a name="putCharts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putCharts"></a>

```typescript
public putCharts(value: IResolvable | GoogleChronicleNativeDashboardCharts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putCharts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putFilters"></a>

```typescript
public putFilters(value: IResolvable | GoogleChronicleNativeDashboardFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleChronicleNativeDashboardTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

---

##### `resetAccess` <a name="resetAccess" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetAccess"></a>

```typescript
public resetAccess(): void
```

##### `resetCharts` <a name="resetCharts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetCharts"></a>

```typescript
public resetCharts(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsPinned` <a name="resetIsPinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetIsPinned"></a>

```typescript
public resetIsPinned(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleNativeDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleChronicleNativeDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleNativeDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleNativeDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleNativeDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.charts">charts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList">GoogleChronicleNativeDashboardChartsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createUserId">createUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dashboardId">dashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList">GoogleChronicleNativeDashboardFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lastViewedTime">lastViewedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference">GoogleChronicleNativeDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateUserId">updateUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.accessInput">accessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.chartsInput">chartsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filtersInput">filtersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinnedInput">isPinnedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.access">access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinned">isPinned</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `charts`<sup>Required</sup> <a name="charts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.charts"></a>

```typescript
public readonly charts: GoogleChronicleNativeDashboardChartsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList">GoogleChronicleNativeDashboardChartsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `createUserId`<sup>Required</sup> <a name="createUserId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createUserId"></a>

```typescript
public readonly createUserId: string;
```

- *Type:* string

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filters"></a>

```typescript
public readonly filters: GoogleChronicleNativeDashboardFiltersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList">GoogleChronicleNativeDashboardFiltersList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `lastViewedTime`<sup>Required</sup> <a name="lastViewedTime" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lastViewedTime"></a>

```typescript
public readonly lastViewedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleNativeDashboardTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference">GoogleChronicleNativeDashboardTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `updateUserId`<sup>Required</sup> <a name="updateUserId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateUserId"></a>

```typescript
public readonly updateUserId: string;
```

- *Type:* string

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.accessInput"></a>

```typescript
public readonly accessInput: string;
```

- *Type:* string

---

##### `chartsInput`<sup>Optional</sup> <a name="chartsInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.chartsInput"></a>

```typescript
public readonly chartsInput: IResolvable | GoogleChronicleNativeDashboardCharts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | GoogleChronicleNativeDashboardFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `isPinnedInput`<sup>Optional</sup> <a name="isPinnedInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinnedInput"></a>

```typescript
public readonly isPinnedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleChronicleNativeDashboardTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `isPinned`<sup>Required</sup> <a name="isPinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinned"></a>

```typescript
public readonly isPinned: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleNativeDashboardCharts <a name="GoogleChronicleNativeDashboardCharts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

const googleChronicleNativeDashboardCharts: googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.chartLayout">chartLayout</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a></code> | chart_layout block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.dashboardChart">dashboardChart</a></code> | <code>string</code> | The resource name of the associated DashboardChart. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.filtersIds">filtersIds</a></code> | <code>string[]</code> | List of dashboard filter IDs applied to this chart. |

---

##### `chartLayout`<sup>Optional</sup> <a name="chartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.chartLayout"></a>

```typescript
public readonly chartLayout: GoogleChronicleNativeDashboardChartsChartLayout;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

chart_layout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#chart_layout GoogleChronicleNativeDashboard#chart_layout}

---

##### `dashboardChart`<sup>Optional</sup> <a name="dashboardChart" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.dashboardChart"></a>

```typescript
public readonly dashboardChart: string;
```

- *Type:* string

The resource name of the associated DashboardChart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#dashboard_chart GoogleChronicleNativeDashboard#dashboard_chart}

---

##### `filtersIds`<sup>Optional</sup> <a name="filtersIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.filtersIds"></a>

```typescript
public readonly filtersIds: string[];
```

- *Type:* string[]

List of dashboard filter IDs applied to this chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#filters_ids GoogleChronicleNativeDashboard#filters_ids}

---

### GoogleChronicleNativeDashboardChartsChartLayout <a name="GoogleChronicleNativeDashboardChartsChartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

const googleChronicleNativeDashboardChartsChartLayout: googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanX">spanX</a></code> | <code>number</code> | The number of columns the chart spans. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanY">spanY</a></code> | <code>number</code> | The number of rows the chart spans. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startX">startX</a></code> | <code>number</code> | The starting X coordinate. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startY">startY</a></code> | <code>number</code> | The starting Y coordinate. |

---

##### `spanX`<sup>Required</sup> <a name="spanX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanX"></a>

```typescript
public readonly spanX: number;
```

- *Type:* number

The number of columns the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#span_x GoogleChronicleNativeDashboard#span_x}

---

##### `spanY`<sup>Required</sup> <a name="spanY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanY"></a>

```typescript
public readonly spanY: number;
```

- *Type:* number

The number of rows the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#span_y GoogleChronicleNativeDashboard#span_y}

---

##### `startX`<sup>Optional</sup> <a name="startX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startX"></a>

```typescript
public readonly startX: number;
```

- *Type:* number

The starting X coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#start_x GoogleChronicleNativeDashboard#start_x}

---

##### `startY`<sup>Optional</sup> <a name="startY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startY"></a>

```typescript
public readonly startY: number;
```

- *Type:* number

The starting Y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#start_y GoogleChronicleNativeDashboard#start_y}

---

### GoogleChronicleNativeDashboardConfig <a name="GoogleChronicleNativeDashboardConfig" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

const googleChronicleNativeDashboardConfig: googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.instance">instance</a></code> | <code>string</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.location">location</a></code> | <code>string</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.access">access</a></code> | <code>string</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.charts">charts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]</code> | charts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.description">description</a></code> | <code>string</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.filters">filters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]</code> | filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.isPinned">isPinned</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#project GoogleChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.type">type</a></code> | <code>string</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#display_name GoogleChronicleNativeDashboard#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#instance GoogleChronicleNativeDashboard#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#location GoogleChronicleNativeDashboard#location}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#access GoogleChronicleNativeDashboard#access}

---

##### `charts`<sup>Optional</sup> <a name="charts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.charts"></a>

```typescript
public readonly charts: IResolvable | GoogleChronicleNativeDashboardCharts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#charts GoogleChronicleNativeDashboard#charts}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#deletion_policy GoogleChronicleNativeDashboard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#description GoogleChronicleNativeDashboard#description}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.filters"></a>

```typescript
public readonly filters: IResolvable | GoogleChronicleNativeDashboardFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#filters GoogleChronicleNativeDashboard#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPinned`<sup>Optional</sup> <a name="isPinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.isPinned"></a>

```typescript
public readonly isPinned: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#is_pinned GoogleChronicleNativeDashboard#is_pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#project GoogleChronicleNativeDashboard#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleNativeDashboardTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#timeouts GoogleChronicleNativeDashboard#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#type GoogleChronicleNativeDashboard#type}

---

### GoogleChronicleNativeDashboardFilters <a name="GoogleChronicleNativeDashboardFilters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

const googleChronicleNativeDashboardFilters: googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.chartIds">chartIds</a></code> | <code>string[]</code> | The IDs of charts that this filter applies to. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.dataSource">dataSource</a></code> | <code>string</code> | The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.displayName">displayName</a></code> | <code>string</code> | The display name of the filter. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.fieldPath">fieldPath</a></code> | <code>string</code> | The UDM field path being filtered. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues">filterOperatorAndFieldValues</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]</code> | filter_operator_and_field_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.id">id</a></code> | <code>string</code> | The unique ID of the filter. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isMandatory">isMandatory</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the filter is mandatory for the dashboard consumer. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter">isStandardTimeRangeFilter</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the filter is a standard time range filter. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled">isStandardTimeRangeFilterEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the standard time range filter is currently enabled. |

---

##### `chartIds`<sup>Optional</sup> <a name="chartIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.chartIds"></a>

```typescript
public readonly chartIds: string[];
```

- *Type:* string[]

The IDs of charts that this filter applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#chart_ids GoogleChronicleNativeDashboard#chart_ids}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#data_source GoogleChronicleNativeDashboard#data_source}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#display_name GoogleChronicleNativeDashboard#display_name}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

The UDM field path being filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#field_path GoogleChronicleNativeDashboard#field_path}

---

##### `filterOperatorAndFieldValues`<sup>Optional</sup> <a name="filterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues"></a>

```typescript
public readonly filterOperatorAndFieldValues: IResolvable | GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

filter_operator_and_field_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#filter_operator_and_field_values GoogleChronicleNativeDashboard#filter_operator_and_field_values}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique ID of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isMandatory`<sup>Optional</sup> <a name="isMandatory" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isMandatory"></a>

```typescript
public readonly isMandatory: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the filter is mandatory for the dashboard consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#is_mandatory GoogleChronicleNativeDashboard#is_mandatory}

---

##### `isStandardTimeRangeFilter`<sup>Optional</sup> <a name="isStandardTimeRangeFilter" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter"></a>

```typescript
public readonly isStandardTimeRangeFilter: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the filter is a standard time range filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#is_standard_time_range_filter GoogleChronicleNativeDashboard#is_standard_time_range_filter}

---

##### `isStandardTimeRangeFilterEnabled`<sup>Optional</sup> <a name="isStandardTimeRangeFilterEnabled" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled"></a>

```typescript
public readonly isStandardTimeRangeFilterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the standard time range filter is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#is_standard_time_range_filter_enabled GoogleChronicleNativeDashboard#is_standard_time_range_filter_enabled}

---

### GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues <a name="GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

const googleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues: googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues">fieldValues</a></code> | <code>string[]</code> | The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator">filterOperator</a></code> | <code>string</code> | The operator to apply to the field. |

---

##### `fieldValues`<sup>Optional</sup> <a name="fieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues"></a>

```typescript
public readonly fieldValues: string[];
```

- *Type:* string[]

The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#field_values GoogleChronicleNativeDashboard#field_values}

---

##### `filterOperator`<sup>Optional</sup> <a name="filterOperator" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator"></a>

```typescript
public readonly filterOperator: string;
```

- *Type:* string

The operator to apply to the field.

Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#filter_operator GoogleChronicleNativeDashboard#filter_operator}

---

### GoogleChronicleNativeDashboardTimeouts <a name="GoogleChronicleNativeDashboardTimeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

const googleChronicleNativeDashboardTimeouts: googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#create GoogleChronicleNativeDashboard#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#delete GoogleChronicleNativeDashboard#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#update GoogleChronicleNativeDashboard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#create GoogleChronicleNativeDashboard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#delete GoogleChronicleNativeDashboard#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#update GoogleChronicleNativeDashboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleNativeDashboardChartsChartLayoutOutputReference <a name="GoogleChronicleNativeDashboardChartsChartLayoutOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

new googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX">resetStartX</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY">resetStartY</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartX` <a name="resetStartX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX"></a>

```typescript
public resetStartX(): void
```

##### `resetStartY` <a name="resetStartY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY"></a>

```typescript
public resetStartY(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput">spanXInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput">spanYInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput">startXInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput">startYInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX">spanX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY">spanY</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX">startX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY">startY</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spanXInput`<sup>Optional</sup> <a name="spanXInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput"></a>

```typescript
public readonly spanXInput: number;
```

- *Type:* number

---

##### `spanYInput`<sup>Optional</sup> <a name="spanYInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput"></a>

```typescript
public readonly spanYInput: number;
```

- *Type:* number

---

##### `startXInput`<sup>Optional</sup> <a name="startXInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput"></a>

```typescript
public readonly startXInput: number;
```

- *Type:* number

---

##### `startYInput`<sup>Optional</sup> <a name="startYInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput"></a>

```typescript
public readonly startYInput: number;
```

- *Type:* number

---

##### `spanX`<sup>Required</sup> <a name="spanX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX"></a>

```typescript
public readonly spanX: number;
```

- *Type:* number

---

##### `spanY`<sup>Required</sup> <a name="spanY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY"></a>

```typescript
public readonly spanY: number;
```

- *Type:* number

---

##### `startX`<sup>Required</sup> <a name="startX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX"></a>

```typescript
public readonly startX: number;
```

- *Type:* number

---

##### `startY`<sup>Required</sup> <a name="startY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY"></a>

```typescript
public readonly startY: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleNativeDashboardChartsChartLayout;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

---


### GoogleChronicleNativeDashboardChartsList <a name="GoogleChronicleNativeDashboardChartsList" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

new googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.get"></a>

```typescript
public get(index: number): GoogleChronicleNativeDashboardChartsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleNativeDashboardCharts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]

---


### GoogleChronicleNativeDashboardChartsOutputReference <a name="GoogleChronicleNativeDashboardChartsOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

new googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout">putChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetChartLayout">resetChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetDashboardChart">resetDashboardChart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetFiltersIds">resetFiltersIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChartLayout` <a name="putChartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout"></a>

```typescript
public putChartLayout(value: GoogleChronicleNativeDashboardChartsChartLayout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

---

##### `resetChartLayout` <a name="resetChartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetChartLayout"></a>

```typescript
public resetChartLayout(): void
```

##### `resetDashboardChart` <a name="resetDashboardChart" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetDashboardChart"></a>

```typescript
public resetDashboardChart(): void
```

##### `resetFiltersIds` <a name="resetFiltersIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetFiltersIds"></a>

```typescript
public resetFiltersIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayout">chartLayout</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference">GoogleChronicleNativeDashboardChartsChartLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput">chartLayoutInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput">dashboardChartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput">filtersIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChart">dashboardChart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIds">filtersIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chartLayout`<sup>Required</sup> <a name="chartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayout"></a>

```typescript
public readonly chartLayout: GoogleChronicleNativeDashboardChartsChartLayoutOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference">GoogleChronicleNativeDashboardChartsChartLayoutOutputReference</a>

---

##### `chartLayoutInput`<sup>Optional</sup> <a name="chartLayoutInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput"></a>

```typescript
public readonly chartLayoutInput: GoogleChronicleNativeDashboardChartsChartLayout;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

---

##### `dashboardChartInput`<sup>Optional</sup> <a name="dashboardChartInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput"></a>

```typescript
public readonly dashboardChartInput: string;
```

- *Type:* string

---

##### `filtersIdsInput`<sup>Optional</sup> <a name="filtersIdsInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput"></a>

```typescript
public readonly filtersIdsInput: string[];
```

- *Type:* string[]

---

##### `dashboardChart`<sup>Required</sup> <a name="dashboardChart" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChart"></a>

```typescript
public readonly dashboardChart: string;
```

- *Type:* string

---

##### `filtersIds`<sup>Required</sup> <a name="filtersIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIds"></a>

```typescript
public readonly filtersIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleNativeDashboardCharts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>

---


### GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList <a name="GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

new googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get"></a>

```typescript
public get(index: number): GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

---


### GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference <a name="GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

new googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues">resetFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator">resetFilterOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldValues` <a name="resetFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues"></a>

```typescript
public resetFieldValues(): void
```

##### `resetFilterOperator` <a name="resetFilterOperator" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator"></a>

```typescript
public resetFilterOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput">fieldValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput">filterOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues">fieldValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator">filterOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldValuesInput`<sup>Optional</sup> <a name="fieldValuesInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput"></a>

```typescript
public readonly fieldValuesInput: string[];
```

- *Type:* string[]

---

##### `filterOperatorInput`<sup>Optional</sup> <a name="filterOperatorInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput"></a>

```typescript
public readonly filterOperatorInput: string;
```

- *Type:* string

---

##### `fieldValues`<sup>Required</sup> <a name="fieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues"></a>

```typescript
public readonly fieldValues: string[];
```

- *Type:* string[]

---

##### `filterOperator`<sup>Required</sup> <a name="filterOperator" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator"></a>

```typescript
public readonly filterOperator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>

---


### GoogleChronicleNativeDashboardFiltersList <a name="GoogleChronicleNativeDashboardFiltersList" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

new googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.get"></a>

```typescript
public get(index: number): GoogleChronicleNativeDashboardFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleNativeDashboardFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]

---


### GoogleChronicleNativeDashboardFiltersOutputReference <a name="GoogleChronicleNativeDashboardFiltersOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

new googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues">putFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetChartIds">resetChartIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues">resetFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsMandatory">resetIsMandatory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter">resetIsStandardTimeRangeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled">resetIsStandardTimeRangeFilterEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterOperatorAndFieldValues` <a name="putFilterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues"></a>

```typescript
public putFilterOperatorAndFieldValues(value: IResolvable | GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

---

##### `resetChartIds` <a name="resetChartIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetChartIds"></a>

```typescript
public resetChartIds(): void
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDataSource"></a>

```typescript
public resetDataSource(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```

##### `resetFilterOperatorAndFieldValues` <a name="resetFilterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues"></a>

```typescript
public resetFilterOperatorAndFieldValues(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsMandatory` <a name="resetIsMandatory" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsMandatory"></a>

```typescript
public resetIsMandatory(): void
```

##### `resetIsStandardTimeRangeFilter` <a name="resetIsStandardTimeRangeFilter" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter"></a>

```typescript
public resetIsStandardTimeRangeFilter(): void
```

##### `resetIsStandardTimeRangeFilterEnabled` <a name="resetIsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled"></a>

```typescript
public resetIsStandardTimeRangeFilterEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues">filterOperatorAndFieldValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput">chartIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput">filterOperatorAndFieldValuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput">isMandatoryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput">isStandardTimeRangeFilterEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput">isStandardTimeRangeFilterInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIds">chartIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatory">isMandatory</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter">isStandardTimeRangeFilter</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled">isStandardTimeRangeFilterEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterOperatorAndFieldValues`<sup>Required</sup> <a name="filterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues"></a>

```typescript
public readonly filterOperatorAndFieldValues: GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a>

---

##### `chartIdsInput`<sup>Optional</sup> <a name="chartIdsInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput"></a>

```typescript
public readonly chartIdsInput: string[];
```

- *Type:* string[]

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `filterOperatorAndFieldValuesInput`<sup>Optional</sup> <a name="filterOperatorAndFieldValuesInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput"></a>

```typescript
public readonly filterOperatorAndFieldValuesInput: IResolvable | GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isMandatoryInput`<sup>Optional</sup> <a name="isMandatoryInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput"></a>

```typescript
public readonly isMandatoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isStandardTimeRangeFilterEnabledInput`<sup>Optional</sup> <a name="isStandardTimeRangeFilterEnabledInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput"></a>

```typescript
public readonly isStandardTimeRangeFilterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isStandardTimeRangeFilterInput`<sup>Optional</sup> <a name="isStandardTimeRangeFilterInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput"></a>

```typescript
public readonly isStandardTimeRangeFilterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `chartIds`<sup>Required</sup> <a name="chartIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIds"></a>

```typescript
public readonly chartIds: string[];
```

- *Type:* string[]

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isMandatory`<sup>Required</sup> <a name="isMandatory" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatory"></a>

```typescript
public readonly isMandatory: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isStandardTimeRangeFilter`<sup>Required</sup> <a name="isStandardTimeRangeFilter" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter"></a>

```typescript
public readonly isStandardTimeRangeFilter: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isStandardTimeRangeFilterEnabled`<sup>Required</sup> <a name="isStandardTimeRangeFilterEnabled" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled"></a>

```typescript
public readonly isStandardTimeRangeFilterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleNativeDashboardFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>

---


### GoogleChronicleNativeDashboardTimeoutsOutputReference <a name="GoogleChronicleNativeDashboardTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleChronicleNativeDashboard } from '@cdktn/provider-google-beta'

new googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleNativeDashboardTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

---



