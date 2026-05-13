# `googleContactCenterInsightsAutoLabelingRule` Submodule <a name="`googleContactCenterInsightsAutoLabelingRule` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsAutoLabelingRule <a name="GoogleContactCenterInsightsAutoLabelingRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule google_contact_center_insights_auto_labeling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer"></a>

```typescript
import { googleContactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule(scope: Construct, id: string, config: GoogleContactCenterInsightsAutoLabelingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig">GoogleContactCenterInsightsAutoLabelingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig">GoogleContactCenterInsightsAutoLabelingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId">resetAutoLabelingRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetLabelKey">resetLabelKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetLabelKeyType">resetLabelKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putConditions"></a>

```typescript
public putConditions(value: IResolvable | GoogleContactCenterInsightsAutoLabelingRuleConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleContactCenterInsightsAutoLabelingRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetAutoLabelingRuleId` <a name="resetAutoLabelingRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId"></a>

```typescript
public resetAutoLabelingRuleId(): void
```

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabelKey` <a name="resetLabelKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetLabelKey"></a>

```typescript
public resetLabelKey(): void
```

##### `resetLabelKeyType` <a name="resetLabelKeyType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetLabelKeyType"></a>

```typescript
public resetLabelKeyType(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isConstruct"></a>

```typescript
import { googleContactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google-beta'

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformElement"></a>

```typescript
import { googleContactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google-beta'

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformResource"></a>

```typescript
import { googleContactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google-beta'

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport"></a>

```typescript
import { googleContactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google-beta'

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContactCenterInsightsAutoLabelingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContactCenterInsightsAutoLabelingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsAutoLabelingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList">GoogleContactCenterInsightsAutoLabelingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.activeInput">activeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput">autoLabelingRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyInput">labelKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput">labelKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId">autoLabelingRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKey">labelKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyType">labelKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.conditions"></a>

```typescript
public readonly conditions: GoogleContactCenterInsightsAutoLabelingRuleConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList">GoogleContactCenterInsightsAutoLabelingRuleConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoLabelingRuleIdInput`<sup>Optional</sup> <a name="autoLabelingRuleIdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput"></a>

```typescript
public readonly autoLabelingRuleIdInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | GoogleContactCenterInsightsAutoLabelingRuleConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelKeyInput`<sup>Optional</sup> <a name="labelKeyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyInput"></a>

```typescript
public readonly labelKeyInput: string;
```

- *Type:* string

---

##### `labelKeyTypeInput`<sup>Optional</sup> <a name="labelKeyTypeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput"></a>

```typescript
public readonly labelKeyTypeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleContactCenterInsightsAutoLabelingRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoLabelingRuleId`<sup>Required</sup> <a name="autoLabelingRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId"></a>

```typescript
public readonly autoLabelingRuleId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labelKey`<sup>Required</sup> <a name="labelKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKey"></a>

```typescript
public readonly labelKey: string;
```

- *Type:* string

---

##### `labelKeyType`<sup>Required</sup> <a name="labelKeyType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyType"></a>

```typescript
public readonly labelKeyType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsAutoLabelingRuleConditions <a name="GoogleContactCenterInsightsAutoLabelingRuleConditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.Initializer"></a>

```typescript
import { googleContactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsAutoLabelingRuleConditions: googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.property.condition">condition</a></code> | <code>string</code> | A optional CEL expression to be evaluated as a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.property.value">value</a></code> | <code>string</code> | CEL expression to be evaluated as the value. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

A optional CEL expression to be evaluated as a boolean value.

Once evaluated as true, then we will proceed with the value evaluation.
An empty condition will be auto evaluated as true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#condition GoogleContactCenterInsightsAutoLabelingRule#condition}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

CEL expression to be evaluated as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#value GoogleContactCenterInsightsAutoLabelingRule#value}

---

### GoogleContactCenterInsightsAutoLabelingRuleConfig <a name="GoogleContactCenterInsightsAutoLabelingRuleConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.Initializer"></a>

```typescript
import { googleContactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsAutoLabelingRuleConfig: googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.location">location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId">autoLabelingRuleId</a></code> | <code>string</code> | A unique ID for the new AutoLabelingRule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.description">description</a></code> | <code>string</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.displayName">displayName</a></code> | <code>string</code> | Display Name of the auto labeling rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#id GoogleContactCenterInsightsAutoLabelingRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.labelKey">labelKey</a></code> | <code>string</code> | The label key. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType">labelKeyType</a></code> | <code>string</code> | The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#project GoogleContactCenterInsightsAutoLabelingRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#location GoogleContactCenterInsightsAutoLabelingRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#active GoogleContactCenterInsightsAutoLabelingRule#active}

---

##### `autoLabelingRuleId`<sup>Optional</sup> <a name="autoLabelingRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId"></a>

```typescript
public readonly autoLabelingRuleId: string;
```

- *Type:* string

A unique ID for the new AutoLabelingRule.

This ID will become the final
component of the AutoLabelingRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#auto_labeling_rule_id GoogleContactCenterInsightsAutoLabelingRule#auto_labeling_rule_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | GoogleContactCenterInsightsAutoLabelingRuleConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#conditions GoogleContactCenterInsightsAutoLabelingRule#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#description GoogleContactCenterInsightsAutoLabelingRule#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display Name of the auto labeling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#display_name GoogleContactCenterInsightsAutoLabelingRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#id GoogleContactCenterInsightsAutoLabelingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labelKey`<sup>Optional</sup> <a name="labelKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.labelKey"></a>

```typescript
public readonly labelKey: string;
```

- *Type:* string

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#label_key GoogleContactCenterInsightsAutoLabelingRule#label_key}

---

##### `labelKeyType`<sup>Optional</sup> <a name="labelKeyType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType"></a>

```typescript
public readonly labelKeyType: string;
```

- *Type:* string

The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#label_key_type GoogleContactCenterInsightsAutoLabelingRule#label_key_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#project GoogleContactCenterInsightsAutoLabelingRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsAutoLabelingRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#timeouts GoogleContactCenterInsightsAutoLabelingRule#timeouts}

---

### GoogleContactCenterInsightsAutoLabelingRuleTimeouts <a name="GoogleContactCenterInsightsAutoLabelingRuleTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.Initializer"></a>

```typescript
import { googleContactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google-beta'

const googleContactCenterInsightsAutoLabelingRuleTimeouts: googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#create GoogleContactCenterInsightsAutoLabelingRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#delete GoogleContactCenterInsightsAutoLabelingRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#update GoogleContactCenterInsightsAutoLabelingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#create GoogleContactCenterInsightsAutoLabelingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#delete GoogleContactCenterInsightsAutoLabelingRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_auto_labeling_rule#update GoogleContactCenterInsightsAutoLabelingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsAutoLabelingRuleConditionsList <a name="GoogleContactCenterInsightsAutoLabelingRuleConditionsList" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer"></a>

```typescript
import { googleContactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.get"></a>

```typescript
public get(index: number): GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContactCenterInsightsAutoLabelingRuleConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>[]

---


### GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference <a name="GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContactCenterInsightsAutoLabelingRuleConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>

---


### GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference <a name="GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsAutoLabelingRule } from '@cdktn/provider-google-beta'

new googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContactCenterInsightsAutoLabelingRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

---



