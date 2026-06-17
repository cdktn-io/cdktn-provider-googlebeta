# `googleContactCenterInsightsQaScorecard` Submodule <a name="`googleContactCenterInsightsQaScorecard` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsQaScorecard <a name="GoogleContactCenterInsightsQaScorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard google_contact_center_insights_qa_scorecard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.Initializer"></a>

```typescript
import { googleContactCenterInsightsQaScorecard } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard(scope: Construct, id: string, config: GoogleContactCenterInsightsQaScorecardConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig">GoogleContactCenterInsightsQaScorecardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig">GoogleContactCenterInsightsQaScorecardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleContactCenterInsightsQaScorecardTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts">GoogleContactCenterInsightsQaScorecardTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetIsDefault"></a>

```typescript
public resetIsDefault(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsQaScorecard resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.isConstruct"></a>

```typescript
import { googleContactCenterInsightsQaScorecard } from '@cdktn/provider-google-beta'

googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.isTerraformElement"></a>

```typescript
import { googleContactCenterInsightsQaScorecard } from '@cdktn/provider-google-beta'

googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.isTerraformResource"></a>

```typescript
import { googleContactCenterInsightsQaScorecard } from '@cdktn/provider-google-beta'

googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.generateConfigForImport"></a>

```typescript
import { googleContactCenterInsightsQaScorecard } from '@cdktn/provider-google-beta'

googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleContactCenterInsightsQaScorecard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContactCenterInsightsQaScorecard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContactCenterInsightsQaScorecard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsQaScorecard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference">GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.qaScorecardIdInput">qaScorecardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts">GoogleContactCenterInsightsQaScorecardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.isDefault">isDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.qaScorecardId">qaScorecardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference">GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `qaScorecardIdInput`<sup>Optional</sup> <a name="qaScorecardIdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.qaScorecardIdInput"></a>

```typescript
public readonly qaScorecardIdInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleContactCenterInsightsQaScorecardTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts">GoogleContactCenterInsightsQaScorecardTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `qaScorecardId`<sup>Required</sup> <a name="qaScorecardId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.qaScorecardId"></a>

```typescript
public readonly qaScorecardId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecard.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsQaScorecardConfig <a name="GoogleContactCenterInsightsQaScorecardConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.Initializer"></a>

```typescript
import { googleContactCenterInsightsQaScorecard } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsQaScorecardConfig: googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.qaScorecardId">qaScorecardId</a></code> | <code>string</code> | A unique ID for the new QaScorecard. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.description">description</a></code> | <code>string</code> | A text description explaining the intent of the scorecard. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.displayName">displayName</a></code> | <code>string</code> | The user-specified display name of the scorecard. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#id GoogleContactCenterInsightsQaScorecard#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.isDefault">isDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the scorecard is the default one for the project. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#project GoogleContactCenterInsightsQaScorecard#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.source">source</a></code> | <code>string</code> | Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts">GoogleContactCenterInsightsQaScorecardTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#location GoogleContactCenterInsightsQaScorecard#location}

---

##### `qaScorecardId`<sup>Required</sup> <a name="qaScorecardId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.qaScorecardId"></a>

```typescript
public readonly qaScorecardId: string;
```

- *Type:* string

A unique ID for the new QaScorecard.

This ID will become the final
component of the QaScorecard's resource name. If no ID is specified, a
server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[a-z0-9-]{4,64}$'. Valid characters are 'a-z-'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#qa_scorecard_id GoogleContactCenterInsightsQaScorecard#qa_scorecard_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#deletion_policy GoogleContactCenterInsightsQaScorecard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A text description explaining the intent of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#description GoogleContactCenterInsightsQaScorecard#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user-specified display name of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#display_name GoogleContactCenterInsightsQaScorecard#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#id GoogleContactCenterInsightsQaScorecard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the scorecard is the default one for the project.

A default scorecard cannot be deleted and will always appear first in
scorecard selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#is_default GoogleContactCenterInsightsQaScorecard#is_default}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#project GoogleContactCenterInsightsQaScorecard#project}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#source GoogleContactCenterInsightsQaScorecard#source}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsQaScorecardTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts">GoogleContactCenterInsightsQaScorecardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#timeouts GoogleContactCenterInsightsQaScorecard#timeouts}

---

### GoogleContactCenterInsightsQaScorecardTimeouts <a name="GoogleContactCenterInsightsQaScorecardTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts.Initializer"></a>

```typescript
import { googleContactCenterInsightsQaScorecard } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsQaScorecardTimeouts: googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#create GoogleContactCenterInsightsQaScorecard#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#delete GoogleContactCenterInsightsQaScorecard#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#update GoogleContactCenterInsightsQaScorecard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#create GoogleContactCenterInsightsQaScorecard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#delete GoogleContactCenterInsightsQaScorecard#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard#update GoogleContactCenterInsightsQaScorecard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference <a name="GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsQaScorecard } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts">GoogleContactCenterInsightsQaScorecardTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContactCenterInsightsQaScorecardTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecard.GoogleContactCenterInsightsQaScorecardTimeouts">GoogleContactCenterInsightsQaScorecardTimeouts</a>

---



