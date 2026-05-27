# `googleContactCenterInsightsQaScorecardRevision` Submodule <a name="`googleContactCenterInsightsQaScorecardRevision` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsQaScorecardRevision <a name="GoogleContactCenterInsightsQaScorecardRevision" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision google_contact_center_insights_qa_scorecard_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer"></a>

```typescript
import { googleContactCenterInsightsQaScorecardRevision } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision(scope: Construct, id: string, config: GoogleContactCenterInsightsQaScorecardRevisionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig">GoogleContactCenterInsightsQaScorecardRevisionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig">GoogleContactCenterInsightsQaScorecardRevisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetQaScorecardRevisionId">resetQaScorecardRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleContactCenterInsightsQaScorecardRevisionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetQaScorecardRevisionId` <a name="resetQaScorecardRevisionId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetQaScorecardRevisionId"></a>

```typescript
public resetQaScorecardRevisionId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct"></a>

```typescript
import { googleContactCenterInsightsQaScorecardRevision } from '@cdktn/provider-google-beta'

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement"></a>

```typescript
import { googleContactCenterInsightsQaScorecardRevision } from '@cdktn/provider-google-beta'

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource"></a>

```typescript
import { googleContactCenterInsightsQaScorecardRevision } from '@cdktn/provider-google-beta'

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport"></a>

```typescript
import { googleContactCenterInsightsQaScorecardRevision } from '@cdktn/provider-google-beta'

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContactCenterInsightsQaScorecardRevision to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContactCenterInsightsQaScorecardRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsQaScorecardRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.alternateIds">alternateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.snapshot">snapshot</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList">GoogleContactCenterInsightsQaScorecardRevisionSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference">GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardInput">qaScorecardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionIdInput">qaScorecardRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecard">qaScorecard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionId">qaScorecardRevisionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alternateIds`<sup>Required</sup> <a name="alternateIds" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.alternateIds"></a>

```typescript
public readonly alternateIds: string[];
```

- *Type:* string[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.snapshot"></a>

```typescript
public readonly snapshot: GoogleContactCenterInsightsQaScorecardRevisionSnapshotList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList">GoogleContactCenterInsightsQaScorecardRevisionSnapshotList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference">GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `qaScorecardInput`<sup>Optional</sup> <a name="qaScorecardInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardInput"></a>

```typescript
public readonly qaScorecardInput: string;
```

- *Type:* string

---

##### `qaScorecardRevisionIdInput`<sup>Optional</sup> <a name="qaScorecardRevisionIdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionIdInput"></a>

```typescript
public readonly qaScorecardRevisionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleContactCenterInsightsQaScorecardRevisionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `qaScorecard`<sup>Required</sup> <a name="qaScorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecard"></a>

```typescript
public readonly qaScorecard: string;
```

- *Type:* string

---

##### `qaScorecardRevisionId`<sup>Required</sup> <a name="qaScorecardRevisionId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionId"></a>

```typescript
public readonly qaScorecardRevisionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsQaScorecardRevisionConfig <a name="GoogleContactCenterInsightsQaScorecardRevisionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.Initializer"></a>

```typescript
import { googleContactCenterInsightsQaScorecardRevision } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsQaScorecardRevisionConfig: googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecard">qaScorecard</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#id GoogleContactCenterInsightsQaScorecardRevision#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#project GoogleContactCenterInsightsQaScorecardRevision#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecardRevisionId">qaScorecardRevisionId</a></code> | <code>string</code> | A unique ID for the new QaScorecardRevision. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#location GoogleContactCenterInsightsQaScorecardRevision#location}

---

##### `qaScorecard`<sup>Required</sup> <a name="qaScorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecard"></a>

```typescript
public readonly qaScorecard: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#qa_scorecard GoogleContactCenterInsightsQaScorecardRevision#qa_scorecard}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#id GoogleContactCenterInsightsQaScorecardRevision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#project GoogleContactCenterInsightsQaScorecardRevision#project}.

---

##### `qaScorecardRevisionId`<sup>Optional</sup> <a name="qaScorecardRevisionId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecardRevisionId"></a>

```typescript
public readonly qaScorecardRevisionId: string;
```

- *Type:* string

A unique ID for the new QaScorecardRevision.

This ID will become the final
component of the QaScorecardRevision's resource name.
If no ID is specified this resource will get the latest revision on the given scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#qa_scorecard_revision_id GoogleContactCenterInsightsQaScorecardRevision#qa_scorecard_revision_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsQaScorecardRevisionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#timeouts GoogleContactCenterInsightsQaScorecardRevision#timeouts}

---

### GoogleContactCenterInsightsQaScorecardRevisionSnapshot <a name="GoogleContactCenterInsightsQaScorecardRevisionSnapshot" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot.Initializer"></a>

```typescript
import { googleContactCenterInsightsQaScorecardRevision } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsQaScorecardRevisionSnapshot: googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot = { ... }
```


### GoogleContactCenterInsightsQaScorecardRevisionTimeouts <a name="GoogleContactCenterInsightsQaScorecardRevisionTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.Initializer"></a>

```typescript
import { googleContactCenterInsightsQaScorecardRevision } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsQaScorecardRevisionTimeouts: googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#create GoogleContactCenterInsightsQaScorecardRevision#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#delete GoogleContactCenterInsightsQaScorecardRevision#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#create GoogleContactCenterInsightsQaScorecardRevision#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#delete GoogleContactCenterInsightsQaScorecardRevision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsQaScorecardRevisionSnapshotList <a name="GoogleContactCenterInsightsQaScorecardRevisionSnapshotList" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer"></a>

```typescript
import { googleContactCenterInsightsQaScorecardRevision } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.get"></a>

```typescript
public get(index: number): GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference <a name="GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsQaScorecardRevision } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.isDefault">isDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot">GoogleContactCenterInsightsQaScorecardRevisionSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContactCenterInsightsQaScorecardRevisionSnapshot;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot">GoogleContactCenterInsightsQaScorecardRevisionSnapshot</a>

---


### GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference <a name="GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsQaScorecardRevision } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContactCenterInsightsQaScorecardRevisionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

---



